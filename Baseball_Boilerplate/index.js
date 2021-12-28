// 다시 시작해보기 (작성해보기)
const $input = document.querySelector('#input')
const $form = document.querySelector('#form')
const $logs = document.querySelector('#logs')
const $popUp = document.querySelector('.popUp')
const $restate_text = document.querySelector('#restate_text')
const $popUp_out = document.querySelector('.popUp_out')
const $restate_text_out = document.querySelector('#restate_text_out')
const $popUp_sc = document.querySelector('.popUp_sc')
const $restate_text_sc = document.querySelector('#restate_text_sc')

const numbers = []; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let n = 0; n < 9; n += 1) {
  numbers.push(n + 1);
}
const answer = [];
for (let n = 0; n < 4; n += 1) {  // 네 번 반복
  const index = Math.floor(Math.random() * numbers.length); // 0~8 정수
  answer.push(numbers[index]); // 뽑아서 넣고
  numbers.splice(index, 1); // 원래꺼에서는 빼주고
}
console.log(answer);

const tries = [];
function checkInput(input) {
  if (input.length !== 4) { // 길이는 4가 아닌가
    return alert('4자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 4) { // 중복된 숫자가 있는가
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (tries.includes(input)) { // 이미 시도한 값은 아닌가
    return alert('이미 시도한 값입니다.');
  }
  return true;
} // 검사하는 코드

// 하나로 모아다가 해결하고싶군(일단은 공부를 더하자)
function defeated() {
  const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
  $logs.appendChild(message, $popUp.style.visibility = 'visible');
}
function defeated_out() {
  const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
  $logs.appendChild(message, $popUp_out.style.visibility = 'visible');
}
function success() {
  const message = document.createTextNode('')
  $logs.appendChild(message, $popUp_sc.style.visibility = 'visible');
}

let out = 0;
// 버튼에도 클릭이라는 이벤트가 발생하지만, from에도 서브밋이라는 이벤트가 발생함
// form의 기본동작은 새로고침이 되는 것이기 때문에 막아주어야함(매개변수로 event를 주고 event.preventDefault(); 사용필요)
$form.addEventListener('submit', (event) => {
  event.preventDefault(); //기본 동작 막기
  const value = $input.value; //값을 변수에 저장해주고
  $input.value = ''; //입력란은 지워줌(다음 입력이 편하기 위해)
  if (!checkInput(value)) { // 통과 못하는 애들 빨리 리턴하는 것으로 바꾸어 if문을 단축
    return;
  }
  // 입력값 문제없음
  if (answer.join('') === value) { //배열을 문자열로 만듬 조인 ''를 안쓰면 배열에 콤마가 생김
    $logs.textContent = '홈런!';
    success()
    return;
  }
  if (tries.length >= 9) {
    defeated()
    return;
  }
  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { // 일치하는 숫자 발견, 해당 값을 찾지 못하면 index는 -1이 됨, 찾으면 자리수(0이상)가 나옴, index > -1은 -1이 아닌상태 즉, 찾은 상태를 의미함
      if (index === i) { // 자릿수도 같음
        strike += 1;
      } else { // 숫자만 같음
        ball += 1;
      }
    }
  }
  if (strike === 0 && ball === 0) {
    out++;
    $logs.append(`${value}:아웃`, document.createElement(`br`));
  } else {
    $logs.append(`${value}:${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  }
  if (out === 3) {
    defeated_out()
    return;
  }
  tries.push(value);
});

// 하나로 모아다가 해결하고싶군(일단은 공부를 더하자)
$restate_text.addEventListener('click', ()=>{
  window.location.reload(true);
})
$restate_text_out.addEventListener('click', ()=>{
  window.location.reload(true);
})
$restate_text_sc.addEventListener('click', ()=>{
  window.location.reload(true);
})

// // 1. 일단 색 랜덤으로 뽑을 때 사용하였던 것과 비슷하여, 비슷하게 만들어봄(일단 랜덤으로 뽑자)
// let list = [0,1,2,3,4,5,6,7,8,9];
// let info = [];
// function startin() {
//   for (let i = 0; i < 4; i++) {
//     let select = Math.floor(Math.random() * list.length);
//     console.log('list', list, 'info', info, 'length', list.length);
//     info[i] = list.splice(select, 1)[0];
//   }
//   return
// }

// // 2. 던지는 사람 만들기 (다른사람거 참고하였음)
// let count = 0;
// let strike = 0;
// let ball = 0;
// while (count < 10) {
//   // 숫자를 입력받고 비교를 준비하는 부분
//   let input = prompt('숫자를 입력하세요'); // 숫자를 받는 부분
//   let inputArray = input.split(''); // split함수는 아래에 설명
//   strike = 0; // strike와 ball의 개수를 초기화
//   ball = 0;
//   count++; // 시도 횟수는 하나 증가
//   // 입력받은 숫자를 비교분석하는 부분
//   for (let j = 0; j < 4; j++) {
//     for (let k = 0; k < 4; k++) {
//       if (info[j] == inputArray[k]) {
//         if (j === k) {
//           strike++;
//         } else {
//           ball++;
//         }
//         break;
//       }
//     }
//   }
//   // 결과를 표시하는 부분 console객체는 밑에 설명
//   if (strike === 4) {
//     console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
//     break;
//   } else if (count >= 10) {
//     console.error('시도 횟수를 초과하셨습니다.');
//   } else {
//     console.info(inputArray.join('') + ': ' + strike + '스트라이크 ' + ball + '볼');
//   }
// }


// --------------------------------- 사용한거 정리(검색해도 잘 나오지만, 적으면서 한번 더 볼려고 하는) ---------------------------------
// Math.random()
// - 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환함
// - 이 값은 사용자가 원하는 범위로 변형할 수 있음
// - 난수 생성 알고리즘에 사용되는 초기값은 구현체가 선택하며, 사용자가 선택하거나 초기화할 수 없음
// - 암호학적으로 안전한 난수를 제공하지 않으므로, 보안과 관련된 어떤 것에도 이 함수를 사용해서는 안 됨(그 대신 Web Crypto API의 window.crypto.getRandomValues() 메소드를 이용하여야 함)
// Math.random(); // 0~1 사이의 유리수
// Math.random() * 10; // 0~10 사이의 유리수
// Math.floor(Math.random() * 10); // 0~9

// Math.floor()
// - 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
// - 매개변수는 숫자이며, 반환 값은 주어진 수 이하의 가장 큰 정수

// 배열.splice(시작위치, 길이, 기타(배열에 추가할 요소))
// - 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경함
// - array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// - start : 배열의 변경을 시작할 인덱스, 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정됨,
//           음수인 경우 배열의 끝에서부터 요소를 세어나감(원점 -1, 즉 -n이면 요소 끝의 n번째 요소를 가리키며 array.length - n번째 인덱스와 같음),
//           값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정됨
// - deleteCount : 배열에서 제거할 요소의 수,
//                 deleteCount를 생략하거나 값이 array.length - start보다 크면 start부터의 모든 요소를 제거함,
//                 deleteCount가 0 이하라면 어떤 요소도 제거하지 않음(이 때는 최소한 하나의 새로운 요소를 지정해야 함)
// - item1, item2, ... : 배열에 추가할 요소(아무 요소도 지정하지 않으면 splice()는 요소를 제거하기만 함)

// prompt() = alert()
// - 사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화 상자를 띠움
// - result = window.prompt(message, default);
// - message : 사용자에게 보여줄 문자열. 프롬프트 창에 표시할 메세지가 없으면 생략할 수 있음
// - default : 텍스트 입력 필드에 기본으로 채워 넣을 문자열(지정하지 않으면 문자열 "undefined" 지정됨)

// split()
// - str.split([separator[, limit]])
// - 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
// - 분자로 빈 문자열("")을 제공하면, 사용자가 인식하는 문자 하나(grapheme cluster) 또는 유니코드 문자(코드포인트) 하나씩으로 나누는 것이 아니라,
//   UTF-16 코드유닛으로 나누게 되며 써로게이트 페어가 망가질 수 있음
// - separator : 원본 문자열에 끊어야 할 부분을 나타냄(실제 문자열이나 정규표현식을 받을 수 있음),
//               문자열 유형의 separator가 두 글자 이상일 경우 그 부분 문자열 전체가 일치해야 끊어짐,
//               separator가 생략되거나 str에 등장하지 않을 경우, 반환되는 배열은 원본 문자열을 유일한 원소로 가짐
// - limit : 끊어진 문자열의 최대 개수를 나타내는 정수,
//           매개변수를 전달하면 split()메서드는 주어진 separator가 등장할 때마다 문자열을 끊지만 배열의 원소가 limit개가 되면 멈춤,
//           남은 문자열은 새로운 배열에 포함되지 않음
// - 반환값 : 주어진 문자열을 separator마다 끊은 부분 문자열을 담은 Array

// join()
// 배열의 모든 요소를 연결해 하나의 문자열로 만듬

// new Set()
// 중복을 제거한 배열('length'로 구분하지않고 'size'로 표현)
// 쉽게 생각해서 중복이 없는 배열

// .lincudes()
// 배열에 해당하는 값이 들어있는가? 확인하는

// \n : 문자열 줄바꿈

// .append() : 추가
