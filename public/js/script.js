// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", () => {
  //定義
  const drawerIcon = document.querySelector('.drawer-icon');
  const drawer = document.querySelector('.drawer');
  const drawerNavItem = document.querySelectorAll('.drawer-body a[href^="#"]');
  const headerHeight = document.querySelector('header').offsetHeight;
  const breakpoint = 768;
  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  //メニューを開くアニメーション
  const openMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      drawer.classList.add("js-show");
      drawerIcon.classList.add("js-show");
    }
  }
  //メニューを閉じるアニメーション
  const closeMenu = () => {
    if (drawer.classList.contains("js-show")) {
      drawer.classList.remove("js-show");
      drawerIcon.classList.remove("js-show");
      isMenuOpen = false;
    }
  }
  //メニューの開閉動作
  const toggleMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      openMenu();
    } else {
      closeMenu();
    }
  };
  //リサイズ処理
  const handleResize = () => {
    const bp = breakpoint;
    const windowWidth = window.innerWidth;
    if (windowWidth > bp && isMenuOpenAtBreakpoint) {
      closeMenu();
    } else if (windowWidth <= bp && drawer.classList.contains("js-show")) {
      isMenuOpenAtBreakpoint = true;
    }
  };
  //メニュー外クリック処理
  const clickOuter = (event) => {
    if( drawer.classList.contains("js-show") && !drawer.contains(event.target) && isMenuOpen ) {
      closeMenu();
    } else if( drawer.classList.contains("js-show") && !drawer.contains(event.target) ) {
      isMenuOpen = true;
    }
  }
  //該当箇所までスクロール
  const linkScroll = (target) => {
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  //アイコン クリック時
  drawerIcon.addEventListener("click", toggleMenu);
  //画面幅リサイズ時
  window.addEventListener("resize", handleResize);
  //メニュー外クリック時
  document.addEventListener("click", clickOuter);
  //ページ内リンクメニュー クリック時
  drawerNavItem.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      closeMenu();
      const targetItem = document.querySelector(item.getAttribute("href"));
      linkScroll(targetItem);
    });
  });
});

// fvアニメーション
document.addEventListener("DOMContentLoaded", () => {
  function wrapTextNodesWithSpan(element) {
      let childNodes = Array.from(element.childNodes);

      childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
              // テキストノードを1文字ずつ分割し、<span class="char"> で囲む
              let wrappedText = Array.from(node.nodeValue).map(char => 
                  `<span class="char">${char}</span>`
              ).join("");
              const spanWrapper = document.createElement("span");
              spanWrapper.innerHTML = wrappedText;
              node.replaceWith(...spanWrapper.childNodes);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
              // 子要素内のテキストノードも再帰的に処理
              wrapTextNodesWithSpan(node);
          }
      });
  }

  document.querySelectorAll(".fv-copy__text").forEach(p => {
      wrapTextNodesWithSpan(p);
  });

  // すべての .char を取得
  const chars = document.querySelectorAll(".char");

  // FV順番に表示するアニメーション
  const tl = gsap.timeline();
  tl
  .to(chars, {
      opacity: 1,
      y: 0,
      duration: .5,
      stagger: 0.05, // 文字ごとの遅延
  })
  .add(function(){
    document.querySelector(".fv-bg__img").classList.add("--show");
  })
  .add(function(){
    document.querySelector(".fv-bg").classList.add("--show");
  }
  ,'+=0.3')
  .add(function(){
    document.querySelector(".fv-logo").classList.add("--show");
  }
  ,'+=0.3')
  .add(function(){
    document.querySelector(".fv-scroll").classList.add("--show");
  }
  ,'+=0.3')
});


window.addEventListener('DOMContentLoaded', function(){

  gsap.utils.toArray('.fadeIn').forEach((fadeIn) => {
    gsap.fromTo(fadeIn,{autoAlpha: 0, y: 50},{autoAlpha: 1, y:0, duration:1, scale:1,
      stagger: 0.5,
      scrollTrigger:{
        trigger: fadeIn,
        start: 'top 70%',
      }
    })
    });
  
});
window.addEventListener('DOMContentLoaded', function(){
  gsap.to('.fadeIn2',{
    scale: 1,
    duration: .5,
    autoAlpha: 1,
    scrollTrigger:{
      trigger: '#price',
      start: '30% 70%',
    }
  })
  
});

window.addEventListener('DOMContentLoaded', function(){

  const mm = gsap.matchMedia();


  mm.add('(min-width: 768px)',()=>{
    gsap.fromTo('.works-item__img',
      {autoAlpha: 0, y: 50},
      {autoAlpha: 1, y:0, duration:.5,
      stagger: 0.2,
      scrollTrigger:{
        trigger: '.works-item__img',
        start: 'top center',
      }
  
    });
  });  
  mm.add('(max-width: 769px)',()=>{
    const cards = document.querySelectorAll('.works-item__img');

    cards.forEach((card) => {
      gsap.fromTo(card,
        {autoAlpha: 0, y: 50},
        {autoAlpha: 1, y:0, duration:.5,
        stagger: 0.2,
        scrollTrigger:{
          trigger: card,
          start: 'top 70%',
        }
    
      });
    });
    
  });  
});

// businessセクションのアニメーション
window.addEventListener('load',function(){
  gsap.registerPlugin(ScrollTrigger);
  
    const slideInLeftItems = document.querySelectorAll('.slideIn--left');
    slideInLeftItems.forEach(item => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 70%", // 要素が上部から70%の位置で発火
        onEnter: () => {
          // 要素内に入ったら、js-showクラスをつける
          item.classList.add("--show");
        }
      });
    });
    
    const slideInRightItems = document.querySelectorAll('.slideIn--right');
    slideInRightItems.forEach(item => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 70%", // 要素が上部から70%の位置で発火
        onEnter: () => {
          // 要素内に入ったら、js-showクラスをつける
          item.classList.add("--show");
        }
      });
    });
  });


// ラインマーカーのアニメーション    

document.addEventListener('DOMContentLoaded', function() {
  gsap.registerEffect({
    name: 'markerAnimation',
    effect: (targets,config)=>{
      gsap.to(targets,{
        backgroundSize: config.backgroundSize,duration: config.duration,
        scrollTrigger: {
          trigger: targets,
          start: config.start,
        }
      }
    )},
    defaults: {backgroundSize: '100% 90%',duration: .2,start: 'top 70%'}
  })
});

document.addEventListener('DOMContentLoaded', function() {
  const marker = document.querySelectorAll('.section-title .--en');
  marker.forEach((item) => {
    gsap.effects.markerAnimation(item,{backgroundSize: '100% 90%',duration: .5,start: 'top 70%'})
  });
});

// お問い合わせフォームのスクリプト
{
  let inName = document.querySelector('#inName');
  let errorName = document.querySelector('#emName');
  let inEmail = document.querySelector('#inEmail');
  let errorEmail = document.querySelector('#emEmail');
  let inTel = document.querySelector('#inTel');
  let errorTel = document.querySelector('#emTel');
  let inTextarea = document.querySelector('#inTextarea');
  let errorTextarea = document.querySelector('#emTextarea');
  const form = document.querySelector('#contactForm');
  const submitButton = form.querySelector('#sendBtn');

  submitButton.addEventListener('click', function(event) {
    if (inName.value.trim() === '') {
      inName.classList.add('invalid');
      errorName.textContent = 'お名前を入力してください。';
      scrollToElement(inName);
      event.preventDefault(); // 送信を中止
    } else {
      inName.classList.remove('invalid');
      errorName.textContent = ''; // エラーメッセージをクリア
    }

    const emailValue = inEmail.value.trim();
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
      errorEmail.textContent = '正しいメールアドレスを入力してください。';
      inEmail.classList.add('invalid');
      scrollToElement(inEmail);
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      errorEmail.textContent = '正しいメールアドレスを入力してください。';
      inEmail.classList.add('invalid');
      scrollToElement(inEmail);
      isValid = false;
    } else {
      inEmail.classList.remove('invalid');
      errorEmail.textContent = '';
    }

    if (inTextarea.value.trim() === '') {
      inTextarea.classList.add('invalid');
      errorTextarea.textContent = '内容を入力してください。';
      scrollToElement(inTextarea);
      event.preventDefault(); // 送信を中止
    } else {
      inTextarea.classList.remove('invalid');
      errorTextarea.textContent = ''; // エラーメッセージをクリア
    }
    
    const telValue = inTel.value.trim();
    const onlyNumbersPattern = /^\d+$/;
    if( telValue === ''){
      errorTel.textContent = '電話番号を入力してください。';
      inTel.classList.add('invalid');
      scrollToElement(inTel);
      isValid = false;
    }else if(!onlyNumbersPattern.test(telValue)){
      errorTel.textContent = '電話番号は数字のみで入力してください。';
      inTel.classList.add('invalid');
      scrollToElement(inTel);
      isValid = false;
    }else if(/^(\d)\1+$/.test(telValue)){
      errorTel.textContent = '正しい電話番号を入力してください。';
      inTel.classList.add('invalid');
      scrollToElement(inTel);
      isValid = false;
    }else{
      errorTel.textContent = '';
      inTel.classList.remove('invalid');
    }

    function scrollToElement(element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // inName.onblur = function() {
  //   if (!inName.value) {
  //     inName.classList.add('invalid');
  //     errorName.innerHTML = 'お名前を入力してください。'
  //   }
  // };
  // inName.onfocus = function() {
  //   if (this.classList.contains('invalid')) {
  //     errorName.innerHTML = "";
  //   }
  // };
  // inEmail.onblur = function() {
  //   if (!inEmail.value.includes('@')) {
  //     inEmail.classList.add('invalid');
  //     errorEmail.innerHTML = 'メールアドレスの形式でご入力ください。'
  //   }
  // };
  // inEmail.onfocus = function() {
  //   if (this.classList.contains('invalid')) {
  //     errorEmail.innerHTML = "";
  //   }
  // };
  // inTextarea.onblur = function() {
  //   if (!inTextarea.value) {
  //     inTextarea.classList.add('invalid');
  //     errorTextarea.innerHTML = '必須項目です。'
  //   }
  // };
  // inTextarea.onfocus = function() {
  //   if (this.classList.contains('invalid')) {
  //     errorTextarea.innerHTML = "";
  //   }
  // };

  // function onSubmit(token) {
  //   if(!inPrivacy.checked || inTextarea.value.trim() === '' || inSelect.value === '選択してください' || inSelect.value.trim() === '' || !inEmail.value.includes('@') || inName.value.trim() === '') {
    
  //   } else {
  //     document.getElementById("contact-form").submit();
  //   }
  // }

}

// トップへ戻るのスクリプト

document.addEventListener("DOMContentLoaded", function() {
  let toTopButton = document.querySelector('.to-top');

  // スクロールイベントを監視してTo Topボタンを制御
  window.addEventListener('scroll', function() {
    // 現在のスクロール位置を取得
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // スクロール位置が一定値よりも大きい場合にTo Topボタンを表示、それ以外は非表示にする
    if (scrollPosition > 300) {
      toTopButton.classList.add("--show");
    } else {
      toTopButton.classList.remove("--show");
    }
  });

  // To Topボタンがクリックされたときにページの先頭にスクロールする
  toTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// 実績紹介のモーダル用スクリプト

document.addEventListener('DOMContentLoaded', function() {
  const dialogs = document.querySelectorAll('dialog');
  // ダイアログを開く
  const open = document.querySelectorAll('.modal-btn');
  open.forEach(button => {
    button.addEventListener('click', () => {
      const dialogId = button.getAttribute('data-dialog');
      const dialog = document.getElementById(dialogId);
      dialog.showModal();
      dialog.classList.add('--open');
    });
  });

  // ダイアログを閉じる
  const close = document.querySelectorAll('.modal__close-btn');
  close.forEach(button => {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog');
      dialog.classList.remove('--open');
      dialog.close();
    });
  });

  // オーバーレイクリックでダイアログを閉じる
  dialogs.forEach(dialog => {
    dialog.addEventListener('click', (event) => {
      if (event.target.closest('.modal__inner') === null) {
        dialog.classList.remove('--open');
        dialog.close();
      }
    });
  });
});

// コピーライトの年を取得
window.addEventListener('DOMContentLoaded',function(){
  document.getElementById("year").textContent = new Date().getFullYear();
})
