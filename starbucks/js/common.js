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


// 홈페이지 날자 갱신
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021