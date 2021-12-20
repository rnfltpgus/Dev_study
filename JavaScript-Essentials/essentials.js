// import random from './getRandom'


// 조건문 (If statemnet, lf Else / Switch)
// const a = random()

// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 3:
//     console.log('a is 4')
//     break
//   default:
//     console.log('rest...')
// }

// if (a === 0) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else if (a === 4) {
//   console.log('a is 4')
// } else {
//   console.log('rest...')
// }


// 산술 연산자(arithmetic operator)
// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)


// 할당 연산자(assignment operator)
// let a = 2
// a = a + 1
// a += 1
// console.log(a)


// 비교 연산자 (comparison operator)
// const a = 1
// const b = 3
// // console.log(a === b) // === 일치
// // console.log(a !== b) //  !== 불일치
// console.log(a < b) // < > >= <=비교
// console.log(a == b) // == 동등
// function isEqual(x, y) {
//   return x === y
// }
// console.log(isEqual(1, 1))
// console.log(isEqual(2, '2'))


// // 논리 연산자 (logical operator)
// const a = 1 === 1
// const b = 'AB' === 'AB'
// const c = true
// console.log(a)
// console.log(b)
// console.log(c)
// console.log('&&: ', a && b && c) // &&: 그리고(And) 하나라도 값이 다르면 false
// console.log('||: ', a || b || c) // ||: 또는(or) 하나라도 값이 true면 true
// console.log('!: ', !a) // !: 부정(not)


// 삼항 연산자 (ternary operator) : 3개의 항이 있다고해서 삼항연산자임 console.log(a ? '참' : '거짓')
// const a = 1 < 2
// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }
// console.log(a ? '참' : '거짓')


// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}
// const ulEl = document.querySelector('ul')

// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`  // ${} 보관처리
//   if ((i + 1) % 2 === 0) {
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }


// 변수 유효범위(Variable Scope)
// var: 함수레벨의 유효범위
// let/const: 블럭레벨의 유효범위 (여러모로 관리를 위해서 let/const를 사용하는 것이 좋다.)
// function scope() {
//   if (true) {
//     const a = 123
//     console.log(a)
//   }
// }
// scope()


// 형 변환(Type conversion)
// Truthy(참 같은 값)
// true, {}, [] 1, 2, 'false', -12, '3.14, 등등
// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN


// 화살표 함수 : 일부 내용을 생략해서 함수를 최소화할 수 있음
// () => {} vs function () {}
// 객체데이터를 사용하기 위해서는 ({}) 이렇게 사용하면 됨
// const double = function (x, y) {
//   return x * 2
// }
// console.log('bouble: ', double(7))

// const doubleArrow = x => ({ name: 'Heropy'})
// console.log('doubleArrow', doubleArrow(7))


// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression
// const a = 7
// function double() {
//   console.log(a * 2)
// }
// double();

// (function () {
//   console.log(a * 2)
// })();

// (function () {
//   console.log(a * 2)
// }());


// 호이스팅(Hoistion)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// const a = 7

// double()

// function double() {
//   console.log(a * 2)
// }


// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료
// const timer = setInterval(() => {
//   console.log('Heropy!')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearInterval(timer)
// })


//  콜백(Callback)
//  함수의 인수로 사용되는 함수
//  setTimeout(함수, 시간)
// function timeout(cb) {
//   setTimeout(() => {
//     console.log('Heropy!')
//     cb()
//   }, 3000)
// }
// timeout(() => {
//   console.log('Done!')
// })

// 생성자 함수(prototype)
// const heropy = {
//   firstName: 'Heropy',
//   lastName: 'Park',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(heropy.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }
// 아래의 new는 생성자 함수를 이용해서 객체 데이터를 생성하는 것임
// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(heropy.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())


// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의
// const heropy = {
//   name: 'Heropy',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// heropy.normal()
// heropy.arrow()

// const amy = {
//   anme: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }
// amy.normal()
// amy.arrow()

// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }
// const heropy = new User('Heropy')
// heropy.normal()
// heropy.arrow()

// const timer = {
//   name: 'Heropy!!',
//   timeout: function () {
//     setTimeout(() => {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout()


// ES6 Classes

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// // 아래의 new는 생성자 함수를 이용해서 객체 데이터를 생성하는 것임
// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(heropy.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())


// 상속(확장) extends
// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(daughtersCar)