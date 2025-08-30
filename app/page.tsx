export default function Home() {
  return (
    <>
      {/* ここに index.html 内のメイン部分 */}
      <div className="fv">
        <div className="inner fv-inner">
          <div className="fv-copy">
            <p className="fv-copy__top fv-copy__text">
              <strong className="--large">想像</strong>を<strong className="--large">創造</strong>する
            </p>
            <p className="fv-copy__bottom fv-copy__text">
              <strong className="--large">Web</strong>で<strong className="--middle">あなたを<strong className="is-pc">サポート</strong></strong>
            </p>
            <p className="fv-copy__bottom fv-copy__text">
              <strong className="is-sp --large">サポート</strong>
            </p>
          </div>

          <div className="fv-scroll">
            <div className="fv-scroll__item">
              <span className="fv-scroll__border"></span>
              <span className="fv-scroll__ellipse"></span>
            </div>
            <p className="fv-scroll__text">scroll</p>
          </div>
        </div>

        <div className="fv-bg">
          <div className="fv-logo">
            <img src="/img/logo_white.svg" alt="cocoa create" width={534} height={254} loading="lazy" />
          </div>
        </div>

        <div className="fv-bg__img"></div>
      </div>

      <main className="main">
        <section className="section about" id="about">
          <div className="section-inner">
            <h2 className="section-title">
              <span className="--en">About</span>
              <span className="--jp">cocacreateについて</span>
            </h2>

            <div className="about-container fadeIn --delay0">
              <div className="about-text">
                <p>はじめまして、cocacreateです。</p>
                <p>大阪・平野区を拠点に、Webを通じて事業者様のビジネスを支援するため、2025年に開業しました。</p>
                <p>HPやLPの制作、バナーデザインなど、Webに関する業務を一貫してサポートいたします。</p>
                <p>また、コーディング代行やWordPressの構築も承っておりますので、まずはお気軽にご相談ください。</p>
                <p>貴社の想いをカタチにするため、親身になってお手伝いいたします。</p>
              </div>

              <div className="about-img">
                <img src="/img/about.jpg" alt="cocacreateについて" width={400} height={316} loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section business" id="business">
          <div className="section-inner">
            <h2 className="section-title">
              <span className="--en">Business</span>
              <span className="--jp">事業内容</span>
            </h2>

            <div className="business-container">
              <div className="business-item slideIn--left">
                <div className="business-item__img">
                  <img src="/img/business1.jpg" alt="HP/LP製作" width={360} height={240} loading="lazy" />
                </div>
                <div className="business-item__text">
                  <h3 className="business-item__title"><span className="num">01</span>HP/LP製作</h3>
                  <p className="business-item__desc">
                    ホームページやランディングページのデザインからコーディングまで、一貫して制作いたします。
                  </p>
                </div>
              </div>

              <div className="business-item slideIn--right">
                <div className="business-item__img">
                  <img src="/img/business2.jpg" alt="コーディング代行業務" width={360} height={240} loading="lazy" />
                </div>
                <div className="business-item__text">
                  <h3 className="business-item__title"><span className="num">02</span>コーディング代行業務</h3>
                  <p className="business-item__desc">
                    頂いたデザインカンプをベースに、コーディング業務を代行いたしします。
                  </p>
                  <p className="business-item__desc">・HTML/CSS/JavaScript/WordPress構築他</p>
                </div>
              </div>

              <div className="business-item slideIn--left">
                <div className="business-item__img">
                  <img src="/img/banner1.jpg" alt="バナーデザイン" width={360} height={240} loading="lazy" />
                </div>
                <div className="business-item__text">
                  <h3 className="business-item__title"><span className="num">03</span>バナーデザイン</h3>
                  <p className="business-item__desc">
                    SNS等の広告・アイキャッチとして重要なバナーを制作いたします。<br />
                    コンセプト・テキスト等丁寧にヒアリングを行います。
                  </p>
                </div>
              </div>

              <div className="business-item slideIn--right">
                <div className="business-item__img">
                  <img src="/img/business4.jpg" alt="マーケティング支援" width={360} height={240} loading="lazy" />
                </div>
                <div className="business-item__text">
                  <h3 className="business-item__title"><span className="num">04</span>マーケティング支援</h3>
                  <p className="business-item__desc">
                    リスティング広告やLINE構築を活用して、Webを活用した売上向上支援を実施いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section works" id="works">
          <div className="section-inner">
            <h2 className="section-title">
              <span className="--en">Works</span>
              <span className="--jp">制作実績</span>
            </h2>

            <p className="works-text">
              これまでの制作実績の一例をご紹介いたします。<br />
              画像をクリックすると詳細が開きますのでご覧くださいませ。<br />
              その他、非公開実績多数ございます。<br />
              ※バナーについては準備中です。
            </p>

            <div className="works-container">
              <div className="works-items">
                <h3 className="works-items__head">HP/LP制作</h3>

                <div className="works-item">
                  <button className="works-item__img modal-btn" data-dialog="modal1">
                    <img src="/img/hp1.jpg" alt="本サイトの実績紹介" width={300} height={225} loading="lazy" />
                  </button>

                  <dialog id="modal1" aria-labelledby="modal-head1" aria-describedby="modal-text1" className="modal__content">
                    <button className="modal__close-btn">&times;</button>
                    <div className="modal__inner">
                      <div className="modal__body">
                        <h3 id="modal-head1">cocacreate-HP</h3>
                        <p className="modal-desc">HPデザイン/コーディング</p>
                        <div className="modal-img">
                          <img src="/img/mockup1.png" alt="cocacreate-HPのモックアップ画像" className="modal-img__item" width={2000} height={1333} loading="lazy" />
                        </div>
                        <p id="modal-text1">
                          当サイトのデザインとコーディングを実施しました。<br />
                          1ページ内で出来るだけわかりやすく、私たちの事業を紹介できるように意識して製作しました。<br />
                          デザインツールはFigmaを使用、アニメーションはGSAP等JavaScriptライブラリを使用しております。<br />
                        </p>
                        <a href="https://coca-create.com" className="modal-link">サイトを見る</a>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>

              <div className="works-items">
                <h3 className="works-items__head">コーディング代行</h3>

                <div className="works-item">
                  <button className="works-item__img modal-btn" data-dialog="modal2">
                    <img src="/img/cording1.jpg" alt="コーディング代行実績-大阪硅曹株式会社様-" width={300} height={225} loading="lazy" />
                  </button>
                  <dialog id="modal2" aria-labelledby="modal-head2" aria-describedby="modal-text2" className="modal__content">
                    <button className="modal__close-btn">&times;</button>
                    <div className="modal__inner">
                      <div className="modal__body">
                        <h3 id="modal-head2">大阪硅曹株式会社様-コーポレートサイト</h3>
                        <p className="modal-desc">コーディング代行/WordPress構築</p>
                        <div className="modal-img">
                          <img src="/img/mockup2.png" alt="大阪硅曹株式会社様のモックアップ画像" className="modal-img__item" width={2000} height={1333} loading="lazy" />
                        </div>
                        <p id="modal-text2">
                          大阪硅曹株式会社様のコーポレートサイトです。<br />
                          コーディングとWordPress構築を担当させていただきました。<br />
                          ブロックエディタを活用し、製品紹介ページ等はユーザーで編集ができるように設定しております。<br />
                          株式会社サムライソード様の監修のもと、制作を行いました。
                        </p>
                        <a href="https://www.osaka-keisou.co.jp/" className="modal-link">サイトを見る</a>
                      </div>
                    </div>
                  </dialog>

                  <button className="works-item__img modal-btn" data-dialog="modal3">
                    <img src="/img/cording2.jpg" alt="コーディング代行実績-株式会社LEN様-" width={300} height={225} loading="lazy" />
                  </button>
                  <dialog id="modal3" aria-labelledby="modal-head3" aria-describedby="modal-text3" className="modal__content">
                    <button className="modal__close-btn">&times;</button>
                    <div className="modal__inner">
                      <div className="modal__body">
                        <h3 id="modal-head3">株式会社LEN様-コーポレートサイト</h3>
                        <p className="modal-desc">コーディング代行/WordPress構築</p>
                        <div className="modal-img">
                          <img src="/img/mockup3.png" alt="株式会社LEN様-HPのモックアップ画像" className="modal-img__item" width={2000} height={1333} loading="lazy" />
                        </div>
                        <p id="modal-text3">
                          株式会社LEN様のコーポレートサイトです。<br />
                          コーディングとWordPress構築を担当させていただきました。<br />
                          アニメーションはCSSとJavaScriptを活用しております。<br />
                          尚、本サイトにはGSAPは不使用です。
                          株式会社サムライソード様の監修のもと、制作を行いました。
                        </p>
                        <a href="https://len.co.jp/" className="modal-link">サイトを見る</a>
                      </div>
                    </div>
                  </dialog>

                  <button className="works-item__img modal-btn" data-dialog="modal4">
                    <img src="/img/cording3.jpg" alt="コーディング代行実績-株式会社サムライソード様-" width={300} height={225} loading="lazy" />
                  </button>
                  <dialog id="modal4" aria-labelledby="modal-head4" aria-describedby="modal-text4" className="modal__content">
                    <button className="modal__close-btn">&times;</button>
                    <div className="modal__inner">
                      <div className="modal__body">
                        <h3 id="modal-head4">株式会社サムライソード様-採用サイトのLPコーディング</h3>
                        <p className="modal-desc">コーディング代行/LP</p>
                        <div className="modal-img">
                          <img src="/img/mockup4.png" alt="株式会社サムライソード様-LPのモックアップ画像" className="modal-img__item" width={2000} height={1333} loading="lazy" />
                        </div>
                        <p id="modal-text4">
                          株式会社サムライソード様の採用サイトLPです。<br />
                          コーディングを担当させていただきました。<br />
                          gridレイアウトを活用した設計でレスポンシブ表示に対応しております。
                        </p>
                        <a href="https://samuraisword.co.jp/careers/" className="modal-link">サイトを見る</a>
                      </div>
                    </div>
                  </dialog>

                  <button className="works-item__img modal-btn" data-dialog="modal5">
                    <img src="/img/cording4.png" alt="カフェのデモサイトコーディング" width={300} height={225} loading="lazy" />
                  </button>
                  <dialog id="modal5" aria-labelledby="modal-head5" aria-describedby="modal-text5" className="modal__content">
                    <button className="modal__close-btn">&times;</button>
                    <div className="modal__inner">
                      <div className="modal__body">
                        <h3 id="modal-head5">デモサイト-カフェのWordPressコーディング</h3>
                        <p className="modal-desc">コーディング代行/WordPress構築</p>
                        <div className="modal-img">
                          <img src="/img/mockup5.png" alt="カフェのデモサイトのモックアップ画像" className="modal-img__item" width={2000} height={1333} loading="lazy" />
                        </div>
                        <p id="modal-text5">
                          デモサイトとしてカフェのHPを構築しました。<br />
                          CSSアニメーションやSwiper、グリッドレイアウト等を活用しております。<br />
                          記事ページ等は動的に表示されるように設定しております。<br />
                          <br />
                          ※下記リンクはBasic認証がかかっております。<br />
                          ID/PASSともに「demo」です。
                        </p>
                        <a href="https://st-design0310.com/opencafe/wordpress/" className="modal-link">サイトを見る</a>
                      </div>
                    </div>
                  </dialog>

                  <button className="works-item__img modal-btn" data-dialog="modal6">
                    <img src="/img/cording5.png" alt="工務店のデモサイトコーディング" width={300} height={225} loading="lazy" />
                  </button>
                  <dialog id="modal6" aria-labelledby="modal-head6" aria-describedby="modal-text6" className="modal__content">
                    <button className="modal__close-btn">&times;</button>
                    <div className="modal__inner">
                      <div className="modal__body">
                        <h3 id="modal-head6">デモサイト-工務店サイトのコーディング</h3>
                        <p className="modal-desc">コーディング代行/コーポレートサイト</p>
                        <div className="modal-img">
                          <img src="/img/mockup6.png" alt="カフェのデモサイトのモックアップ画像" className="modal-img__item" width={2000} height={1333} loading="lazy" />
                        </div>
                        <p id="modal-text6">
                          デモサイトとして工務店のHPを構築しました。<br />
                          Photoshopデザインカンプからのコーディング実施です。<br />
                          アニメーションにはwowを使用しています。<br />
                          <br />
                          ※下記リンクはBasic認証がかかっております。<br />
                          ID/PASSともに「demo」です。
                        </p>
                        <a href="https://st-design0310.com/house/" className="modal-link">サイトを見る</a>
                      </div>
                    </div>
                  </dialog>

                  <button className="works-item__img modal-btn" data-dialog="modal7">
                    <img src="/img/cording6.png" alt="家具LPのデモサイトコーディング" width={300} height={225} loading="lazy" />
                  </button>
                  <dialog id="modal7" aria-labelledby="modal-head7" aria-describedby="modal-text7" className="modal__content">
                    <button className="modal__close-btn">&times;</button>
                    <div className="modal__inner">
                      <div className="modal__body">
                        <h3 id="modal-head7">デモサイト-家具LPのコーディング</h3>
                        <p className="modal-desc">コーディング代行/LP</p>
                        <div className="modal-img">
                          <img src="/img/mockup7.png" alt="カフェのデモサイトのモックアップ画像" className="modal-img__item" width={2000} height={1333} loading="lazy" />
                        </div>
                        <p id="modal-text7">
                          デモサイトとして家具LPを構築しました。<br />
                          <br />
                          ※下記リンクはBasic認証がかかっております。<br />
                          ID/PASSともに「demo」です。
                        </p>
                        <a href="https://st-design0310.com/rich-life/" className="modal-link">サイトを見る</a>
                      </div>
                    </div>
                  </dialog>

                  <button className="works-item__img modal-btn" data-dialog="modal8">
                    <img src="/img/cording7.png" alt="LPのデモサイトコーディング" width={300} height={225} loading="lazy" />
                  </button>
                  <dialog id="modal8" aria-labelledby="modal-head8" aria-describedby="modal-text8" className="modal__content">
                    <button className="modal__close-btn">&times;</button>
                    <div className="modal__inner">
                      <div className="modal__body">
                        <h3 id="modal-head8">デモサイト-LPコーディング</h3>
                        <p className="modal-desc">コーディング代行/LP</p>
                        <div className="modal-img">
                          <img src="/img/mockup8.png" alt="カフェのデモサイトのモックアップ画像" className="modal-img__item" width={2000} height={1333} loading="lazy" />
                        </div>
                        <p id="modal-text8">
                          デモサイトとして家具LPを構築しました。<br />
                          スライダーにはSwiperを使用しております。<br />
                          <br />
                          ※下記リンクはBasic認証がかかっております。<br />
                          ID/PASSともに「demo」です。
                        </p>
                        <a href="https://st-design0310.com/lastwork/" className="modal-link">サイトを見る</a>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>

              <div className="works-items">
                <h3 className="works-items__head">バナーデザイン</h3>
                <div className="works-item">
                  <span className="works-item__img --none">
                    <img src="/img/banner2.jpg" alt="バナー紹介1" width={300} height={225} loading="lazy" />
                  </span>
                  <span className="works-item__img --none">
                    <img src="/img/banner1.jpg" alt="バナー紹介1" width={300} height={225} loading="lazy" />
                  </span>
                  <span className="works-item__img --none">
                    <img src="/img/banner3.jpg" alt="バナー紹介1" width={300} height={225} loading="lazy" />
                  </span>
                </div>
              </div>

              {/* <a href="#" className="works-link">詳細はこちら<span className="underline"></span></a> */}
            </div>
          </div>
        </section>

        <section className="section price" id="price">
          <div className="section-inner">
            <h2 className="section-title">
              <span className="--en">Price</span>
              <span className="--jp">料金表</span>
            </h2>

            <div className="price-container fadeIn2">
              <div className="price-list">
                <dl className="price-item">
                  <dt className="price-item__head">・HP/LP制作一式</dt>
                  <dd className="price-item__body">20~50万円</dd>
                </dl>
                <dl className="price-item">
                  <dt className="price-item__head">・HPコーディング</dt>
                  <dd className="price-item__body">TOPページ：2万円〜　<br className="is-sp" />下層ページ：1万円〜</dd>
                </dl>
                <dl className="price-item">
                  <dt className="price-item__head">・LPコーディング</dt>
                  <dd className="price-item__body">１ページ：5万円〜</dd>
                </dl>
                <dl className="price-item">
                  <dt className="price-item__head">・WordPress構築費</dt>
                  <dd className="price-item__body">3万円〜</dd>
                </dl>
                <dl className="price-item">
                  <dt className="price-item__head">・HP/LPデザイン</dt>
                  <dd className="price-item__body">10万円〜</dd>
                </dl>
                <dl className="price-item">
                  <dt className="price-item__head">・バナー制作費</dt>
                  <dd className="price-item__body">5千円〜</dd>
                </dl>
              </div>

              <p className="price-text">
                ※上記は目安です。<br className="is-sp" />
                詳細は<a href="#contact">お問合せ</a>より<br className="is-sp" />
                見積をご依頼くださいませ。
              </p>
            </div>
          </div>
        </section>

        <section className="section member" id="member">
          <div className="section-inner">
            <h2 className="section-title">
              <span className="--en">Member</span>
              <span className="--jp">メンバー</span>
            </h2>

            <div className="member-container">
              <div className="member-card">
                <div className="member-card__img">
                  <img src="/img/member1.JPG" alt="佐竹　智之" width={343} height={271} loading="lazy" />
                </div>
                <div className="member-card__body">
                  <p className="member-card__head">
                    佐竹&emsp;智之<span className="job">/Web Creator</span>
                  </p>
                  <p className="member-card__text">
                    大阪府出身・平野区在住の30代。<br />
                    新卒から13年間商社営業として勤務し、2023年よりWeb制作事業を開始。<br />
                    現在はコーディング業務を中心にフリーランスとして活動中。<br />
                    WordPress構築、LP構築を得意とする。<br />
                    また、デザインツールFigmaを活用し、デザインからコーディングまで一貫して対応可能。
                  </p>
                  <a href="https://x.com/ST0121_Osaka" className="member-card__link" target="_blank" rel="noopener noreferrer">
                    Xアカウントはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section news" id="news">
          <div className="section-inner">
            <h2 className="section-title">
              <span className="--en">News</span>
              <span className="--jp">お知らせ</span>
            </h2>

            <div className="news-container">
              <div className="news-item">
                <a href="#" className="news-item__link">
                  <time className="news-item__date" dateTime="2025-02-25">2025.2.25</time>
                  <p className="news-item__text">ホームページを開設しました。</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-inner">
            <h2 className="section-title">
              <span className="--en">Contact</span>
              <span className="--jp">お問い合わせ</span>
            </h2>

            <div className="contact-container">
              <form action="confirm.php" method="post" className="contact-form" id="contactForm">
                <div className="contact-table">
                  {/* type="radio" */}
                  <div className="contact-item --start">
                    <div className="contact-head --require"><p>お問合せ項目</p></div>
                    <div className="contact-body --radio">
                      <label className="contact-kind">
                        <input
                          type="radio"
                          name="kind"
                          defaultChecked
                          required
                          value="コーディング業務に関する問い合わせ"
                        />
                        <span className="contact-kind__text">コーディング業務に関する問い合わせ</span>
                      </label>
                      <label className="contact-kind">
                        <input type="radio" name="kind" value="Webデザインに関するお問い合わせ" />
                        <span className="contact-kind__text">Webデザインに関するお問い合わせ</span>
                      </label>
                      <label className="contact-kind">
                        <input type="radio" name="kind" value="WordPress構築に関するお問い合わせ" />
                        <span className="contact-kind__text">WordPress構築に関するお問い合わせ</span>
                      </label>
                      <label className="contact-kind">
                        <input type="radio" name="kind" value="その他" />
                        <span className="contact-kind__text">その他</span>
                      </label>
                    </div>
                  </div>

                  {/* type="text" */}
                  <div className="contact-item">
                    <div className="contact-head"><p>会社名</p></div>
                    <div className="contact-body">
                      <input type="text" name="company" className="form-text" placeholder="株式会社○○○○○" />
                    </div>
                  </div>

                  {/* type="text" */}
                  <div className="contact-item">
                    <div className="contact-head --require"><p>氏名</p></div>
                    <div className="contact-body">
                      <input type="text" name="name" className="form-text" required placeholder="氏名を入力してください" id="inName" />
                      <p className="contact__error-message" id="emName"></p>
                    </div>
                  </div>

                  {/* type="email" */}
                  <div className="contact-item">
                    <div className="contact-head --require"><p>メールアドレス</p></div>
                    <div className="contact-body">
                      <input type="email" name="email" className="form-text" required placeholder="example@example.com" id="inEmail" />
                      <p className="contact__error-message" id="emEmail"></p>
                    </div>
                  </div>

                  {/* type="tel" */}
                  <div className="contact-item">
                    <div className="contact-head --require"><p>電話番号</p></div>
                    <div className="contact-body">
                      <input type="tel" name="tel" className="form-text" required placeholder="0123-456-789" id="inTel" />
                      <p className="contact__error-message" id="emTel"></p>
                    </div>
                  </div>

                  {/* textarea */}
                  <div className="contact-item">
                    <div className="contact-head --require"><p>お問合せ内容</p></div>
                    <div className="contact-body">
                      <textarea name="textarea" className="form-textarea" required placeholder="お問合せ内容を入力してください" id="inTextarea"></textarea>
                      <p className="contact__error-message" id="emTextarea"></p>
                    </div>
                  </div>
                </div>

                <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
                <button type="submit" className="contact-submit" id="sendBtn">送信する</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
