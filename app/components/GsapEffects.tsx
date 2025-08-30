"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapEffects() {
    const pathname = usePathname();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ===== FV 文字分割 & タイムライン =====
            const wrapTextNodesWithSpan = (element: Element) => {
                const childNodes = Array.from(element.childNodes);
                childNodes.forEach((node) => {
                    if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim()) {
                        const wrapped = Array.from(node.nodeValue).map((ch) => `<span class="char">${ch}</span>`).join("");
                        const spanWrapper = document.createElement("span");
                        spanWrapper.innerHTML = wrapped;
                        node.replaceWith(...spanWrapper.childNodes);
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        wrapTextNodesWithSpan(node as Element);
                    }
                });
            };
            document.querySelectorAll(".fv-copy__text").forEach((p) => wrapTextNodesWithSpan(p));
            const chars = document.querySelectorAll<HTMLElement>(".char");

            const tl = gsap.timeline();
            if (chars.length) {
                tl.to(chars, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 })
                    .add(() => document.querySelector(".fv-bg__img")?.classList.add("--show"))
                    .add(() => document.querySelector(".fv-bg")?.classList.add("--show"), "+=0.3")
                    .add(() => document.querySelector(".fv-logo")?.classList.add("--show"), "+=0.3")
                    .add(() => document.querySelector(".fv-scroll")?.classList.add("--show"), "+=0.3");
            }

            // ===== フェードイン =====
            gsap.utils.toArray<HTMLElement>(".fadeIn").forEach((el) => {
                gsap.fromTo(
                    el,
                    { autoAlpha: 0, y: 50 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: { trigger: el, start: "top 70%" },
                    }
                );
            });

            // ===== Price セクション =====
            gsap.to(".fadeIn2", {
                scale: 1,
                duration: 0.5,
                autoAlpha: 1,
                scrollTrigger: { trigger: "#price", start: "30% 70%" },
            });

            // ===== Works 画像：ブレイクポイントで挙動切り替え =====
            const mm = gsap.matchMedia();
            mm.add("(min-width: 768px)", () => {
                gsap.fromTo(
                    ".works-item__img",
                    { autoAlpha: 0, y: 50 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.2,
                        scrollTrigger: { trigger: ".works-item__img", start: "top center" },
                    }
                );
            });
            mm.add("(max-width: 767.98px)", () => {
                document.querySelectorAll<HTMLElement>(".works-item__img").forEach((card) => {
                    gsap.fromTo(
                        card,
                        { autoAlpha: 0, y: 50 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.5,
                            stagger: 0.2,
                            scrollTrigger: { trigger: card, start: "top 70%" },
                        }
                    );
                });
            });

            // ===== Business セクション：クラス付与 =====
            document.querySelectorAll<HTMLElement>(".slideIn--left").forEach((item) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 70%",
                    onEnter: () => item.classList.add("--show"),
                });
            });
            document.querySelectorAll<HTMLElement>(".slideIn--right").forEach((item) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 70%",
                    onEnter: () => item.classList.add("--show"),
                });
            });

            // ===== ラインマーカーのエフェクト =====
            document.querySelectorAll<HTMLElement>(".section-title .--en").forEach((item) => {
                gsap.to(item, {
                    backgroundSize: "100% 90%",
                    duration: 0.5,
                    scrollTrigger: { trigger: item, start: "top 70%" },
                });
            });
        });

        return () => ctx.revert();
    }, [pathname]);

    return null;
}
