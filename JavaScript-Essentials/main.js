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

for (let i = 0; i < 3; i += 1) {
  console.log(i)
}
