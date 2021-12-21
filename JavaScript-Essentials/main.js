// ************************** 배열 **************************
// .length : 길이
// .concat() : 두개의 배열 데이터를 병합하여, 새로운 배열 데이터를 반환(원본의 데이터는 손상되지않음)
// .forEach() : 매소드가 붙어있는 배열 데이터의 아이템 개수만큼 콜백이 됨
// .map() : 인수로 사용하는 콜백의 데이터를 가지고 그 데이터를 가지고 새로운 데이터를 만들어서 반환
// .filter() : 배열 데이터 안에 있는 데이터를 특정의 기준으로 필터하여 표현
// .fund() .findIndex() : 찾아진 아이템을 입력, 찾아진 아이템에 인덱스 번호를 찾아 입력
// .includes() : 배열 데이터 부분에 인수로 측정한 데이터가 포함되어 있는지 확인
// .push() : 배열 데이터 가장 뒤에 인수의 내용을 넣는 매소드
// .unshift() : 베열 데이터 가장 앞에 인수의 내용을 넣는 매소드
// .reverse() : 배열을 거꾸로 뒤집어 버림
// .splice() : 배열 데이터에서 특정한 인수를 지울때 사용


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.forEach((fruit, index) => {
//   console.log(`$fruit}-${index}`)
// })
// console.log(a)

// const b = fruits.map(function (fruit, index) {
//   return {
//     id: index,
//     name: fruit
//   }
// })
// const b = fruits.map((fruit, index) => ({
//   id: index,
//   name: fruit
// }))
// console.log(b)

// const b = numbers.filter(number => {
//   return number < 3
// })
// const b = numbers.filter(number => number < 3)
// console.log(b)

// const a = fruits.find(fruit => /^C/.test(fruit))
// console.log(a)

// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b)

// numbers.splice(2, 1, 99)
// console.log(numbers)
// fruits.splice(2, 0, 'Orange')
// console.log(fruits)

// ************************** 객체 **************************
// Object.assign() : 메소드는 열거할 수 있는 하나 이상의 출처 객제로부터 대상 객체로 속성을 복사할 때 사용

// const userAge = {
//   // key: value
//   name: 'Heropy',
//   age: 85
// }
// const userEmail = {
//   name: 'Heropy',
//   email: 'thesencon@gmail.com'
// }

// const target = Object.assign({}, userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b)
