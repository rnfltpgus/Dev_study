// *********************************** Part 1 ************************************
// ----------------------------------- loops -----------------------------------
// for loop에는 세미콜론과 중괄호를 기준으로 크게 4가지 파트
// for (1번 파트; 2번 파트; 4번 파트) {3번 파트}
// 1번 : 초기 구동코드,
// 2번 : 3번 파트(반복 구절)의 실행 여부를 결정하는 조건 부분,
// 3번 : 반복하여 실행하는 로직을 써넣는 곳
// 4번 : 3번 파트의 실행이 끝난 후에 실행되는 구절

// 반복문을 이용하여 위에 주어진 문자열을 역순으로 출력하는 코드를 작성하시오.
// var name = "ken"
// function reverse(str){
//   var reverStr = "" ;
//   for (var i = str.length - 1; i >= 0; i--) { // str.length-1인 이유는, 데이터의 총 길이에서 1을 빼야, 해당 데이터의 인덱스(좌표값)가 되기 떄문이며 또한 마지막 문자로 부터 거꾸로 출력해야 하므로 
//     reverStr = reverStr + str.charAt(i);  // charAt(index) : 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환함
//   }
//   return reverStr;
// }
// console.log(reverse("ken"));


// 반복문을 이용하여 위에 주어진 문자열의 홀수번째 글자만 출력하는 코드를 작성해보세요.
// var longText = "0i1a2m3k4e5n";
// var a = "";
// for(let i = 0; i <= longText.length; i++){
// 	if(i % 2 === 1){
//     a += longText[i];
// 	}
// }
// console.log(a)


// ----------------------------------- Exercise -----------------------------------
// 1. FizzBuzz
// 자바스크립트의 반복문과 조건문 등 여러분이 배운 지식을 이용하여 아래와 같은 조건을 만족하는 코드를 작성해보세요.
// 1부터 100까지 console.log를 실행합니다.
// 3의 배수는 "fizz"라는 문자열을 로그합니다.
// 5의 배수는 "buzz"라는 문자열을 로그합니다.
// 3과 5의 공배수는 "fizzbuzz"라는 문자열을 로그합니다.
// 나머지 숫자들은 해당 숫자 자체를 로그합니다.

// -------- 1차 --------
// var i = 1;
// for(var i = 1; i <= 100; i++) {
//   if( i % 3 == 0) {
//     console.log("fizz", i);
//   } else if(i % 5 == 0) {
//     console.log("buzz", i);
//   } else if(i % 3 == 0 && i % 5 == 0)
//     console.log("fizzbuzz", i);
// }
// console.log(i)

// -------- 2차 --------
// var i = 1;
// for(var i = 1; i <= 100; i++) {
//   console.log(i)
//   if( i % 3 == 0) {
//     console.log("fizz", i);
//   } else if(i % 5 == 0) {
//     console.log("buzz", i);
//   } else if(i % 3 == 0 && i % 5 == 0)
//     console.log("fizzbuzz", i);
//   } else (console.log(i);)

// -------- 3차 --------
// var fizzBuzz = function(n) {
//   let result = [];
//   for(let i = 1; i <= 100; i++){
//       if(i % 3 === 0 && i % 5 === 0 ) {
//         result.push("FizzBuzz");
//       } else if(i % 3 === 0) {
//         result.push("Fizz");
//       } else if(i % 5 === 0 ) {
//         result.push("Buzz");
//       } else result.push(i.toString());
//   }
//   return result;
// };

// -------- 4차 --------
// for (var i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 3 == 0) console.log("Fizz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
// }

// -------- 5차 --------
// var len = 100;
// var fizz = 3;
// var buzz = 5;
// for (var i = 1; i <= len; i++) {
//   if (i % fizz === 0 && i % buzz === 0) console.log("FizzBuzz");
//   else if (i % fizz == 0) console.log("Fizz");
//   else if (i % buzz == 0) console.log("Buzz");
//   else console.log(i);
// }

// 2. Biggest Number
// 아래와 같이 세 개의 변수가 숫자를 담고 있습니다. 가장 큰 수가 무엇인지 연산을 하여 console.log 하도록 코드를 작성해보세요.
// Math.max를  사용하지 마세요.
// a, b, c에 담긴 값이 바뀌더라도 항상 정확한 결과가 나올 수 있도록 코드를 작성해보세요.
// var a = 10;
// var b = 20;
// var c = 30;

// const number = [b, a, c];
// number.sort();
// console.log(number[2]);

// 3. Word Position
// 여러분에게 아래와 같이 두 개의 문자열 값이 주어집니다. 하나의 문자열은 단어 정보를 담고 있고, 다른 하나의 문자열은 문장을 담고 있습니다.
// word를 sentence 에서 찾고, 해당 word 의 시작 인덱스와 끝 인덱스를 출력하는 코드를 작성해 보세요.
// 예를 들어, "Where did Jane get the dolphin from, John?" 이라는 문장에서 "dolphin" 이라는 단어는 23번째 인덱스에서 시작하여 29번째 인덱스에서 끝납니다. 따라서 23과 29를 출력합니다.
// indexOf() 함수 : 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴
// string.indexOf(searchvalue, position)
// 파라미터 searchvalue : 필수 입력값, 찾을 문자열
// 파라미터 position : optional, 기본값은 0, string에서 searchvalue를 찾기 시작할 위치
// 찾는 문자열이 없으면 -1 리턴
// 문자열을 찾을 때 대소문자를 구분

// -------- 1차 --------
// var word = "dolphin";
// var sentence = "Where did Jane get the dolphin from, John?";

// var indexOfD = 'dolphin';
// var indexOfN = sentence.lastIndexOf(word, 'dolphin');

// console.log(sentence.indexOf(indexOfD));
// console.log(indexOfN);

// -------- 2차 --------
// var word = "dolphin";
// var sentence = "Where did Jane get the dolphin from, John?";
// console.log(sentence.length)

// var indexOfD = sentence.indexOf(word);
// var indexOfN = sentence.lastIndexOf(word.charAt(word.length-1));

// console.log(indexOfD, indexOfN);

// -------- 3차 --------
// 단어의 마지막 단어는 물어봐야될 듯
// 포지션 값에 word의 순서를 적어주면 될줄알았는데 안됨
// var word = "dolphin";
// var sentence = "Where did Jane get the dolphin from, John?";
// console.log(sentence.length)

// var indexOfD = sentence.indexOf(word);
// var indexOfN = sentence.indexOf(word.indexOf(word.length-1));

// console.log(indexOfD, indexOfN);


// -------- 4차 --------
// var word = "dolphin";
// var sentence = "Where did Jane get the dolphin from, John?";

// var indexOfD = sentence.indexOf(word);
// var indexOfN = indexOfD + word.length - 1;

// console.log(indexOfD, indexOfN);



// *********************************** Part 2 ************************************
// ----------------------------------- Function(함수) -----------------------------------
// Function Declaration (함수 선언식) : 일반적인 프로그래밍 언어에서의 함수 선언과 비슷한 형식
// function foo () {
//   // function body..
// }

// // Function Expression (함수 표현식) : 유연한 자바스크립트 언어의 특징을 활용한 선언 방식
// const foo = function () {
//   // function body..
// };

// 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않음



// ----------------------------------- Arrays(배열) -----------------------------------
// 배열이란 어떠한 정보(값)들을 순서대로 저장할 수 있는 구조
// 배열 안에 들어있는 값들을 요소(element, item, etc)
// .length 속성을 이용해서 갯수를 파악할 수 있음
// 문자열과 마찬가지로 각 요소들을 인덱스를 이용하여 접근할 수 있음, 원하는 요소를 추가도 가능



// ----------------------------------- Object(객체) -----------------------------------
// 객체라고 하는 것은 key/value pair를 저장할 수 있는 구조입니다.
// 객체는 중괄호 표기를 이용하여 만들수 있음
// 각각의 key/value에 대한 정보를 나열할 수 있음(한 쌍의 key/value 뒤에 "쉼표"를 이용하여 그 뒤에 오는 key/value와 구분해주어야 함)
// var person1 = {
//   name: "Ken Huh",
//   age: 13,
//   address: "서울특별시 강남구 삼성로 86길 20"
// };
// 공백과 같이 식별자에 허용되지 않는 문자가 들어간 속성 이름을 정의할 때는 반드시 문자열 표기(따옴표)를 사용해야 함
// 따옴표가 굳이 필요하지 않은 경우(name, age, languages)에는 일반적으로 따옴표를 사용하지 않음


// ----------------------------------- identifier(식별자) -----------------------------------
// 어플리케이션에서 값에 상징적인 이름으로 변수를 사용(변수명은 식별자(identifier)라고 불리며 특정 규칙을 따름
// JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야 하는 반면 이후는 숫자(0-9)일 수도 있음
// 대소문자를 구분하기에, 문자는 "A"부터 "Z"(대문자)와 "a"부터 "z"(소문자)까지 모두 포함

// 객체의 Key/Value는 순서를 정의할 수 없음
// for In loop의 순서는 임의로 정해짐
// 즉, for in loop 내부에 작성한 로직이 Key/Value의 순서에 의존한다면 그 코드는 불안정하다는 것을 의미

// 속성 접근자(property accessor)를 이용해 이미 생성된 객체의 속성에 대한 Value를 가져올 수도, 또는 지정할 수도 있음
// 객체 리터럴 "const person = {};"을 이용해 빈 객체를 생성한 뒤, Dot Notation을 통해 속성을 갱신할 수 있음(Dot Natation을 일반적으로 많이 사용함)
// 그러나, JavaScript에서 식별자로 허용되지 않은 문자가 들어간 속성 이름을 사용해야 하는 경우에는 반드시 Bracket notation을 사용해야 함

// 객체의 속성값으로 함수를 지정할 수도 있음(어떤 객체의 속성으로 접근해서 사용하는 함수를 method 라고 함)


// ----------------------------------- Quiz -----------------------------------
// function foo (a) {
//   return a + 3;
// }

// const arr = [ foo(1), foo(2), foo(3) ];

// console.log(arr); // 4,5,6



// *********************************** Part 3 ************************************
// ----------------------------------- 서울에서 김서방 찾기 -----------------------------------
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

// -------- 1차 -------- : indexOf를 이용
// function solution(seoul){
//   var index = seoul.indexOf('Kim');
//   return "김서방은 " + index + "에 있다";
// }

// console.log(findKim(["Jane", "Kim"]));

// -------- 2차 -------- : 반복문을 이용
// function solution(seoul) {
//   var index = seoul.indexOf("Kim");
//   for(var i = 0; i < seoul.length; i++) {
//       if(seoul[i] == "kim") {
//           var index = i;
//       }
//   }
//   return "김서방은 " + index + "에 있다";
// }


// ----------------------------------- 가운데 글자 가져오기 -----------------------------------
// -------- 1차 --------
// function solution(s) {
//   var answer = '';
  
//   if (s.length % 2 == 0) {
//       answer = s[s.length/2 - 1] + s[s.length/2]};
//   } else {
//       answer = s[Math.floor(s.length/2)];
//   }
//   return answer;
// };

// -------- 2차 --------
// function solution(s){
//   let answer = [];
//   if (s.length % 2 == 0) {
//       answer = s.length / 2;
//   }
//   else {
//     answer = s[Math.floor(s.length/2)];
//   };
//   return answer;
// };

// -------- 3차 -------- : 타인이한거
// concat() : 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
// function solution(s) {
//   var answer = '';
//   if(s.length % 2 === 0){
//       answer = answer.concat(s[s.length/2 - 1]);
//       answer = answer.concat(s[s.length/2]);
//   }else{
//       answer = answer.concat(s[Math.floor(s.length/2)]);
//   }
//   return answer;
// }

// -------- 4차 --------
// function solution(s) {
//   var answer = '';
//   // 홀수일 때
//   // 홀수를 2로 나눈 나머지는 항상 1
//   // 홀수의 경우 소수점이 생기기때문에, Math 메서드로 제거한다.
//   if (s.length % 2 === 1) {
//       let num = Math.floor(s.length / 2);
//       return s[num];
//   }
//   // 짝수일 때
//   // 짝수를 2로 나눈 나머지는 항상 2
//   // 짝수일때는 가운데 두 글자를 반환해야하기 때문에
//   // 두 값을 반환해준다
//   if (s.length % 2 === 0) {
//       let num = s.length / 2;
//       return s[num-1] + s[num];
//   }
// }
//   return answer;

// -------- 5차 -------- : 타인이한거
// substr()은 문자열에서 특정 부분만 골라내는 메서드
// substr(start, length) 의 형태로 사용하며, start는 시작 위치, length는 잘라낼 문자열의 길이를 나타냄
// length를 지정하지 않으면 문자열의 끝까지 잘라내게 됨
// 코드를 보면 substr 메서드의 첫 번째 매개변수에서 문자열 s의 길이를 2로 나눈 값을 소수점을 버리고 사용함
// 두 번째 매개변수가 들어가는 부분에서, 삼항연산자를 사용하여 s.length를 2로 나눈 값의 나머지가 0이면(짝수) 2개의 문자열을 잘라내고, 아닐 경우(홀수)는 1개만 잘라냄
// 삼항 조건 연산자
// JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자
// 맨 앞에 조건문 들어가고. 그 뒤로 물음표(?)와 조건이 참truthy이라면 실행할 식이 물음표 뒤로 들어감
// 바로 뒤로 콜론(:)이 들어가며 조건이 거짓falsy이라면 실행할 식이 마지막에 들어감(보통 if 명령문의 단축 형태로 쓰임)
// condition ? exprIfTrue : exprIfFalse

// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }


// ----------------------------------- 수박수박수박수 -----------------------------------
// -------- 1차 --------
// function solution(n) {
//   var answer = '';
//   for(var i = 1; i <= n; i++) {
//       if(i % 2 === 0) {
//           answer += "박"
//       } else {
//           answer += "수"
//       }
//   }
//   return answer;
// }

// -------- 2차 -------- : 삼항 조건 연산자를 이용
// function solution(n){
//   var result = "";
//     for(var i = 0 ; i < n ; i++) {
//         result += i % 2 == 0 ? "수" : "박";
//   }
//   return result;
// }

// -------- 3차 -------- : 다른사람꺼인데 간략화하는 방법을 배워야할 듯
// function solution(n) {
//   return "수박".repeat(n).substring(0,n)
// }

