// 1. 일단 색 랜덤으로 뽑을 때 사용하였던 것과 비슷하여, 비슷하게 만들어봄(일단 랜덤으로 뽑자)
let list = [0,1,2,3,4,5,6,7,8,9];
let number = [];
for (let i = 0; i < 4; i++) {
  let select = Math.floor(Math.random() * list.length);
  console.log('list', list, 'number', number, 'length', list.length);
  number[i] = list.splice(select, 1)[0];
}

// 2. 던지는 사람 만들기
내일해야지



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