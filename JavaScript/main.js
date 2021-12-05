// console.log('HEROPY');

// /*
// 표기법에는 dash-case(kebab-case), snake_case, camelCase, ParcelCase 가 있는데,

// 1. dash-case(kebab-case)는 html css 에서 사용하며, "-"로 표현한다.
// 2. snake_case는 html css 에서 사용하며, "_"로 표현한다.
// 3. camelCase는 js에서 사용하며 앞에 문자가 소문자고 너머지 단어 노출시 첫 단어가 대문자이다. (거의 카멜을 사용함)
// 4. ParcelCase는 js에서 사용하며 형태소 마다 첫글자를 대문자로 사용한다.

// Zero-based Numbering
// - 0 기반 번호 매기기!
// - 특수한 경우를 제외하고 0부터 숫자를 시작합니다. */

// // 변수 선언 let 은 값(데이터)의 재할당이 가능함
// //  변수 선언 const 은 값(데이터)의 재할당 불가능함

// /* 예약어 Reserved Word
// 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어 */

// /* 함수 function
// 특정 동작(기능)을 수행하는 일부 코드의 집합(부분) */

// // 함수 선언!
// function sum(a, b) { //å와 b는 매개변수(Parameters)
//   return a + b;
// }
// //재사용!
// let a = sum(1, 2); //1과 2는 인수(Arguments)
// let b = sum(7, 12);
// let c = sum(2, 4);

// console.log(a, b, c); // 3, 19, 6

// // 기명(이름이 있는) 함수
// // 함수 선언
// function hello() {
//   console.log('Hello~');
// }

// // 익명(이름이 없는) 함수
// // 함수 표현!
// let world = function () {
//   console.log('World~');
// }

// // 함수 호출!
// hello; // Hello~
// world(); //World~

// // 객체 데이터
// const heropy = {
//   name: 'HEROPY',
//   age: 85,
//   // 메소드(Method)
//   getName: function () {
//     return this.name;
//   }
// };

// const hisName = heropy.getName();
// console.log(hisName); //HEROPY
// //혹은
// console.log(heropy.getName()); //HEROPY

// /* 조건문
// - 조건의 결과(truthy, falsy)에 따라 다른 코들르 실행하는 구문 if, else */

// /* DOM API
// - Document Object Model, Application Programming interface
// - 자바스크립트에서 html를 제어하는 명령들 이라고 생각하면 됨 */

// // HTML 요소(Elemnet) 1개 검색/찾기
// let boxEl = document.querySelector('.box');
// // console.log(boxEl);
// // 요소의 클래스 정보 객체 활용!
// boxEl.classList.add('active');
// let isContains = boxEl.classList.contains('active');
// console.log(isContains); // true

// boxEl.classList.remove('active');
// isContains = boxEl.classList.contains('active');
// console.log(isContains); //false

// // HTMl 요소에 적용할 수 있는 메소드!
// // boxEl.addEventListener();

// // 인수(Arguments)를 추가 가능
// // boxEl.addEventListener(1, 2);

// // 1 - 이벤트(Event, 상황)
// // boxEl.addEventListener('click', 2);

// // 2 - 핸들러(Handler, 실행할 함수)
// boxEl.addEventListener('click', function () {
//   console.log('Click~!');
// });

// //HTML 요소(Element) 모두 검색/찾기
// const boxEls = document.querySelectorAll('.box')
// console.log(boxEls);

// //찾은 요소들 반복(forEach)해서 함수 실행!
// // 익명 함수를 인수로 추가
// boxEls.forEach(function () {});

// // 첫 번째 매개변수(boxEl): 반복 중인 요소
// // 두 번째 매개변수(index): 반복 중인 번호
// boxEls.forEach(function (boxEl, index) {});

// // 출력
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index = 1}`);
//   console.log(index, boxEl);
// });


const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // Box!!

// Setter, 값을 지정하는 용도
boxEl.textContent = 'HEROPY!';
console.log(boxEl.textContent); //HEROPY?!

// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
//   console.log(index, boxEl);
// });