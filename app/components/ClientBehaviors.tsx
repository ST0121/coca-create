"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientBehaviors() {
    const pathname = usePathname();

    // ハンバーガーメニュー + リサイズ + 外側クリック
    useEffect(() => {
        const drawerIcon = document.querySelector<HTMLButtonElement>(".drawer-icon");
        const drawer = document.querySelector<HTMLElement>(".drawer");
        const header = document.querySelector<HTMLElement>("header");
        const drawerNavItem = document.querySelectorAll<HTMLAnchorElement>('.drawer-body a[href^="#"]');
        const breakpoint = 768;
        let isMenuOpen = false;
        let isMenuOpenAtBreakpoint = false;

        if (!drawerIcon || !drawer) return;

        const openMenu = () => {
            if (!drawer.classList.contains("js-show")) {
                drawer.classList.add("js-show");
                drawerIcon.classList.add("js-show");
            }
        };
        const closeMenu = () => {
            if (drawer.classList.contains("js-show")) {
                drawer.classList.remove("js-show");
                drawerIcon.classList.remove("js-show");
                isMenuOpen = false;
            }
        };
        const toggleMenu = () => {
            if (!drawer.classList.contains("js-show")) openMenu();
            else closeMenu();
        };
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth > breakpoint && isMenuOpenAtBreakpoint) {
                closeMenu();
            } else if (windowWidth <= breakpoint && drawer.classList.contains("js-show")) {
                isMenuOpenAtBreakpoint = true;
            }
        };
        const clickOuter = (event: MouseEvent) => {
            if (!drawer.contains(event.target as Node) && drawer.classList.contains("js-show")) {
                if (isMenuOpen) {
                    closeMenu();
                } else {
                    isMenuOpen = true;
                }
            }
        };

        const linkScroll = (target: Element | null) => {
            if (!target) return;
            const headerHeight = header?.offsetHeight ?? 0;
            const targetPosition = (target as HTMLElement).getBoundingClientRect().top + window.scrollY;
            const offsetPosition = targetPosition - headerHeight;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        };

        drawerIcon.addEventListener("click", toggleMenu);
        window.addEventListener("resize", handleResize);
        document.addEventListener("click", clickOuter);
        const onDrawerNavClick = (event: Event) => {
            event.preventDefault();
            const el = event.currentTarget as HTMLAnchorElement;
            closeMenu();
            const href = el.getAttribute("href");
            if (!href) return;
            const targetItem = document.querySelector(href);
            linkScroll(targetItem);
        };

        drawerNavItem.forEach((item) => {
            item.addEventListener("click", onDrawerNavClick);
        });

        return () => {
            drawerIcon.removeEventListener("click", toggleMenu);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", clickOuter);
            drawerNavItem.forEach((item) => {
                item.removeEventListener("click", onDrawerNavClick);
            });
        };
    }, [pathname]);

    // ページ内アンカー（ヘッダー分オフセット & SPA遷移対応）
    useEffect(() => {
        const header = document.querySelector<HTMLElement>("header");
        const handler = (e: Event) => {
            const a = e.currentTarget as HTMLAnchorElement;
            const href = a.getAttribute("href");
            if (!href || !href.startsWith("#")) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const y = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - (header?.offsetHeight ?? 0);
            window.scrollTo({ top: y, behavior: "smooth" });
        };
        const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
        links.forEach((a) => a.addEventListener("click", handler));
        return () => links.forEach((a) => a.removeEventListener("click", handler));
    }, [pathname]);

    // モーダル(<dialog>)
    useEffect(() => {
        const dialogs = document.querySelectorAll<HTMLDialogElement>("dialog");
        const openBtns = document.querySelectorAll<HTMLButtonElement>(".modal-btn");
        const closeBtns = document.querySelectorAll<HTMLButtonElement>(".modal__close-btn");

        const open = (btn: HTMLButtonElement) => {
            const id = btn.getAttribute("data-dialog");
            const dlg = id ? document.getElementById(id) as HTMLDialogElement | null : null;
            if (dlg?.showModal) {
                dlg.showModal();
                dlg.classList.add("--open");
            }
        };
        const close = (btn: HTMLButtonElement) => {
            const dlg = btn.closest("dialog") as HTMLDialogElement | null;
            if (dlg) {
                dlg.classList.remove("--open");
                dlg.close();
            }
        };
        const onBackdrop = (ev: MouseEvent) => {
            const dlg = ev.currentTarget as HTMLDialogElement;
            const inner = dlg.querySelector(".modal__inner");
            if (!inner || !(ev.target instanceof Node)) return;
            if (!inner.contains(ev.target)) {
                dlg.classList.remove("--open");
                dlg.close();
            }
        };

        openBtns.forEach((b) => b.addEventListener("click", () => open(b)));
        closeBtns.forEach((b) => b.addEventListener("click", () => close(b)));
        dialogs.forEach((d) => d.addEventListener("click", onBackdrop));

        return () => {
            openBtns.forEach((b) => b.removeEventListener("click", () => open(b)));
            closeBtns.forEach((b) => b.removeEventListener("click", () => close(b)));
            dialogs.forEach((d) => d.removeEventListener("click", onBackdrop));
        };
    }, [pathname]);

    // フォーム簡易バリデーション
    useEffect(() => {
        const inName = document.querySelector<HTMLInputElement>("#inName");
        const errName = document.querySelector<HTMLElement>("#emName");
        const inEmail = document.querySelector<HTMLInputElement>("#inEmail");
        const errEmail = document.querySelector<HTMLElement>("#emEmail");
        const inTel = document.querySelector<HTMLInputElement>("#inTel");
        const errTel = document.querySelector<HTMLElement>("#emTel");
        const inTextarea = document.querySelector<HTMLTextAreaElement>("#inTextarea");
        const errTextarea = document.querySelector<HTMLElement>("#emTextarea");
        const form = document.querySelector<HTMLFormElement>("#contactForm");
        const submitButton = form?.querySelector<HTMLButtonElement>("#sendBtn");

        if (!form || !submitButton) return;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const onlyNumbersPattern = /^\d+$/;

        const scrollToElement = (el: Element) => el.scrollIntoView({ behavior: "smooth", block: "center" });

        const onSubmit = (event: Event) => {
            let valid = true;

            if (inName && errName) {
                if (inName.value.trim() === "") {
                    inName.classList.add("invalid");
                    errName.textContent = "お名前を入力してください。";
                    scrollToElement(inName);
                    valid = false;
                } else {
                    inName.classList.remove("invalid");
                    errName.textContent = "";
                }
            }

            if (inEmail && errEmail) {
                const v = inEmail.value.trim();
                if (v === "" || !emailPattern.test(v)) {
                    errEmail.textContent = "正しいメールアドレスを入力してください。";
                    inEmail.classList.add("invalid");
                    scrollToElement(inEmail);
                    valid = false;
                } else {
                    inEmail.classList.remove("invalid");
                    errEmail.textContent = "";
                }
            }

            if (inTextarea && errTextarea) {
                if (inTextarea.value.trim() === "") {
                    inTextarea.classList.add("invalid");
                    errTextarea.textContent = "内容を入力してください。";
                    scrollToElement(inTextarea);
                    valid = false;
                } else {
                    inTextarea.classList.remove("invalid");
                    errTextarea.textContent = "";
                }
            }

            if (inTel && errTel) {
                const v = inTel.value.trim();
                if (v === "") {
                    errTel.textContent = "電話番号を入力してください。";
                    inTel.classList.add("invalid");
                    scrollToElement(inTel);
                    valid = false;
                } else if (!onlyNumbersPattern.test(v)) {
                    errTel.textContent = "電話番号は数字のみで入力してください。";
                    inTel.classList.add("invalid");
                    scrollToElement(inTel);
                    valid = false;
                } else if (/^(\d)\1+$/.test(v)) {
                    errTel.textContent = "正しい電話番号を入力してください。";
                    inTel.classList.add("invalid");
                    scrollToElement(inTel);
                    valid = false;
                } else {
                    errTel.textContent = "";
                    inTel.classList.remove("invalid");
                }
            }

            if (!valid) event.preventDefault();
        };

        submitButton.addEventListener("click", onSubmit);
        return () => submitButton.removeEventListener("click", onSubmit);
    }, [pathname]);

    // to-top / 年号
    useEffect(() => {
        const toTop = document.querySelector<HTMLElement>(".to-top");
        const year = document.getElementById("year");
        if (year) year.textContent = String(new Date().getFullYear());

        const onScroll = () => {
            if (!toTop) return;
            if ((window.scrollY || document.documentElement.scrollTop) > 300) {
                toTop.classList.add("--show");
            } else {
                toTop.classList.remove("--show");
            }
        };
        const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

        window.addEventListener("scroll", onScroll);
        toTop?.addEventListener("click", onClick);
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            toTop?.removeEventListener("click", onClick);
        };
    }, []);

    return null;
}
