// import _ from 'lodash' // From 'node_modules'
// import getType from './getType' // getType.js
// // import { random, user as heropy } from './getRandom' // getRandom.js
// import * as R from './getRandom' // * 와일드카드(Wildcard Character, *)는 여러 내용을 한꺼번에 지정할 목적으로 사용하는 기호를 가리킵니다.
// import myData from './myData.json'
// import axios from 'axios'



// // ************************** OMDB API **************************
// function fetchMovies() {
//   axios
//   .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//   .then(res => {
//     console.log(res)
//     const h1El = document.querySelector('h1')
//     const imgEl = document.querySelector('img')
//     h1El.textContent = res.data.Search[0].Title
//     imgEl.src = res.data.Search[0].Poster
//   })
// }
// fetchMovies()



// ************************** Window.localStorage **************************
// localStorage 읽기 전용 속성을 사용하면 Document 출처의 Storage 객체에 접근할 수 있음
// 저장한 데이터는 브라우저 세션 간에 공유
// localStorage는 sessionStorage와 비슷하지만, localStorage의 데이터는 만료되지 않고 sessionStorage의 데이터는 페이지 세션이 끝날 때, 즉 페이지를 닫을 때 사라지는 점이 다릅
// "사생활 보호 모드" 중 생성한 localStorage 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워짐
// localStorage setItem('key', 'value'); : 아이템을 지정하고
// localStorage getItem('key'); : 아이템을 가저오고
// localStorage remveItem('key'); : 아이템을 제거하고
// const user = {
//   name: 'HEROPY',
//   age: 85,
//   emails: [
//     'thesecon@gmail.com',
//     'neo@zillinks.com'
//   ]
// }
// // localStorage.setItem('user', JSON.stringify(user))
// // console.log(localStorage.getItem('user'))
// // console.log(JSON.parse(localStorage.getItem('user')))
// // localStorage.removeItem('user')
// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// obj.age = 22
// console.log(obj)
// localStorage.setItem('user', JSON.stringify(obj))



// ************************** JSON (JavaScript Object Notation) **************************
// 자바스크립트의 객체 표기법
// JSON.stringity(인수) : 어떤 특정한 데이터를 제이슨 형태로 변환시켜주는 명령어 제이슨화
// JSON.parse(인수) : 제이슨 데이터를 분석을 하여, 객체데이터화
// console.log(myData)



// ************************** lodash **************************
// _.uniqBy( , ) : 중복된 인수의 데터와 구별을 할 수 있는 속성값을 넣어 고유한 값만 정리하여 표출해줌
// _.unionBy( , , ) : 중복이 발생할 데이터를 넣어주면 두개의 값을 합추고 세번째 인수로 고유 값을 넣으면 값을 정리하여 고유한 값만 표출해줌
// _.find : 어느 배열에서 명시된 어떤 객체의 데이터를 찾는 용어
// _.findIndex : 어느 배열에서 명시한 해당 객체의 인덱스 번호를 반환
// _.remove : 인수로 배열데이터를 넣고 배열데이터 안의 객체 데이터의 내용을 삭제시키는 용어

// console.log(_.camelCase('the hello world'))
// console.log(getType([1, 2, 3]))
// // console.log(random(), random())
// // console.log(heropy)
// console.log(R)



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
// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
// 전개 연산자(Spread _ ... rest parameter) : 하나의 배열데이터를 전개처리하여 ,로 구분된 아이템으로 표현함

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

// const user = {
//   name: 'Heropy',
//   age: 85,
//   email: 'thesecon@gmail.com',
//   address: 'USA'
// }
// const { name: heropy, age, address = 'Korea' } = user
// // E.g, uwer.address

// console.log(`사용자의 이름은 ${heropy}입니다.`)
// console.log(`${heropy}의 나이는 ${age}세입니다.`)
// console.log(`${heropy}의 이메일 주소는 ${user.email}입니다.`)
// console.log(address)

// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function --- 불변성이 아니기 때문에 선언할때마다 새로운 데이터들이 선언될수도 있기에 이해가 필요


// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// const user = {
//   name: 'Heropy',
//   age: 85,
//   emails: ['thesecon@gamil.com']
// }
// // const copyUser = {...user} // 얕은 복사
// // const copyUser = Object.assign({}, user) // 얕은 복사
// const copyUser = _.cloneDeep(user) // 깊은 복사, lodash의 _.comoneDeep을 활용, 재귀(반복실행)적으로 반복 실행하여 값을 복재
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// user.emails.push('neo@zillinks.com')
// console.log(user.emails === copyUser.emails)
// console.log('user', user)
// console.log('copyUser', copyUser)
