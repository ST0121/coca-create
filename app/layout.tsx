// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientBehaviors from "./components/ClientBehaviors";
import GsapEffects from "./components/GsapEffects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "cocacreate-コカクリエイト",
  description:
    "大阪府平野区を拠点にWeb製作事業を展開しております。コーディング代行、HP製作/LP製作、バナーデザインなど、Webに関することはなんでもご相談ください。",
  // viewport も metadata で付与可能（重複回避したい場合）
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const isStaging = process.env.NEXT_PUBLIC_ENV !== "production";
  return (
    <html lang="ja">
      <head>
        {/* ← ステージングのときだけ noindex を出力 */}
        {isStaging && (
          <meta name="robots" content="noindex,nofollow" />
        )}
        {/* Google Tag Manager（head） */}
        <Script
          id="gtm"
          strategy="afterInteractive"
        >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KWM8DDPF');`}</Script>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Mako&family=Noto+Sans+JP:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* CSS（/public 配下を想定） */}
        <link rel="stylesheet" href="/css/style.css?ver=2.5" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWM8DDPF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ヘッダー共通 */}
        <header className="header">
          <div className="inner">
            <div className="header-wrap">
              <h1 className="header-logo">
                <Link href="/">
                  <img src="/img/logo_black.svg" alt="cocacreate" width={160} height={76} />
                </Link>
              </h1>

              <nav className="header-nav">
                <ul className="header-list">
                  <li className="header-item"><a href="#about">About</a></li>
                  <li className="header-item"><a href="#business">Business</a></li>
                  <li className="header-item"><a href="#works">Works</a></li>
                  <li className="header-item"><a href="#member">Member</a></li>
                  <li className="header-item"><a href="#news">News</a></li>
                </ul>
                <div className="header-btn">
                  <a href="#contact">Contact</a>
                </div>
              </nav>

              <button className="drawer-icon is-sp" aria-label="メニューを開く">
                <span className="drawer-icon--bar">
                  <span className="drawer-icon--bar1"></span>
                  <span className="drawer-icon--bar2"></span>
                  <span className="drawer-icon--bar3"></span>
                </span>
              </button>

              <div className="drawer" role="dialog" aria-modal="true" aria-label="ドロワーメニュー">
                <div className="drawer-inner">
                  <nav className="drawer-body">
                    <ul className="drawer-list">
                      <li className="header-item"><a href="#about">About</a></li>
                      <li className="header-item"><a href="#business">Business</a></li>
                      <li className="header-item"><a href="#works">Works</a></li>
                      <li className="header-item"><a href="#member">Member</a></li>
                      <li className="header-item"><a href="#news">News</a></li>
                    </ul>
                    <a href="#contact" className="drawer-btn">Contact</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}

        {/* フッター共通 */}
        <footer className="footer">
          <p className="footer-copyright">
            &copy; <span id="year"></span> cocacreate. All rights reserved.
          </p>
          <a href="/privacy/" className="footer-link">プライバシーポリシー</a>
          <div className="footer-logo">
            <img src="/img/logo_black.svg" alt="cocacreate" width={97} height={47} />
          </div>
        </footer>

        <div className="to-top" aria-hidden="true">
          <img src="/img/totop.svg" alt="トップへ戻る" width={80} height={80} />
        </div>

        
        <ClientBehaviors />
  <GsapEffects />
       
      </body>
    </html>
  );
}
