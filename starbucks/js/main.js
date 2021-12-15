const searchEl = document.querySelector('.search');
// document는 html 자체다~임
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  //핸들러 두번째인수 실행된다~
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지 보이기
    // badgeEl.style.display - 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션);
// opacity 속성처럼 값을 숫자로 입력하는 속성들은 전환효과(transition 속성이나 GSAP 라이브러리 등)를 통해
// 요소의 전/후상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만,
// display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에,
// 자연스러운 전환 효과를 적용할 수 없다


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 0.7, 1.4, 2.1, 2.7 초뒤에 나올듯 4개니까
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 방향, 수직
  autoplay: true, // 자동재생여부
  loop: true // 반복재생여부
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' // 방향, 수평(horizontal) 하지만 swier에서 제공하는 기본값이 수평이라서 명시안해도됨
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복재생여부
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이스 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true, // 자동재생
  loop: true, // 반복재생
  spaceBetween: 30, // 사이사이 여백
  slidesPerView: 5, // 하나의 화면에 몇개의 슬라이드를 보여줄거인가?
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  } // 객체데이터 할당하기위에 넣음
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    //보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5),  // 애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
      triggerHook: .8 //감시하는 요소가 뷰포트 어느지점부터 노출될 것인지를 판단
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
