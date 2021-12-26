new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' // 방향, 수평(horizontal) 하지만 swier에서 제공하는 기본값이 수평이라서 명시안해도됨
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 20, // 슬라이드 사이 여백
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