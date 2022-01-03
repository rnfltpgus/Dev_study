# 1. TypeScript란 무엇인가?
- Link: [ TypeScript ][https://www.typescriptlang.org/]
- 타입을 추가하여 자바스크립트를 확장하고 편집기에서 초기에 오류를 포착함
- 완전히 오픈소스!
- 타입스크립트 코드를 진짜 실행환경에 맞게 컴파일 해 줌
- 타입스크립트는 'Programming Language 언어', 'Compiled Language'
- 전통적인 Compiled Language 와는 다른 점이 많음, 그래서 'Transpile"이라는 용어를 사용하기도 함
- 자바스크립트는 'Interpreted Language'임
---
순서 | Compiled | Interpreted
-- | -- | --
1 | 컴파일이 필요 O | 컴파일이 필요 X
2 | 컴파일러가 필요 O | 컴파일러가 필요 X
3 | 컴파일하는 시점 O | 컴파일하는 시점 X
4 | 컴파일 타임 | 코드자체를 실행
5 | 컴파일된 결과물을 실행 | 코드를 실행하는 시점 O
6 | 컴파일된 결과물을 실행하는 시점 | 런타임
요점 | 컴파일하는 시점에서 에러를 잡을 수 있음 | 실행을 해야지 잡을 수 있음


# 2. 자바스크립트 실행환경은 크게 2개로 나누져 있다.
## node.js
- chrome's
- V9 JavaScript Enginge을 사용하여, 자바스크립트를 해석하고 OS 레벨에서의 API를 제공하는 서버사이드 용 자바스크립트 런타임 환경

## browser
- HTML을 동적으로 만들기 위해서 브라우저에서 자바스크립트를 해석하고, DOM을 제어할 수 있도록 하는 자바스크립트 런타임 환경

# 3. TypeScript Types vs JavaScript Types
Static Types(set during development) = TypeScript Types
- 개발하는 중간에 타입을 체크하여 에러를 체크함

Dynamic Types(resolved at runtime) = JavaScript Types
- 개발할때는 알수 없고 런타임을 진행해야지만 에러를 알수 있음

## 예시
```js
// JavaScript
function add(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Errror('Incorrect input!');
  }
  retrn n1 + n2;
}
const result = add(39, 28);


// TypeScript
function add(n1: number, n2: number) {
  return n1 + n2;
}
const result = add(39. 28);
```
---
## 그래서~
-  프로그램이 유용하려면, 가장 간단한 데이터 단위로 작업 할 수 있어야 함(numbers, strings, structures, boolean 값 등등)
- TypeScript에서, 우리는 JavaScript에서 기대하는 것과 동일한 타입을 지원하며, 돕기 위해 추가적인 열거 타입이 제공되었음
- TypeScript에서 프로그램 작성을 위해 기본 제공하는 데이터 타입이 있음
- **사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개짐**
- JavaScript 기본 자료형을 포함(superset)
  - **ECMAScript 표준에 따른 기본 자료형은 6가지**
    - Boolean
    - Number
    - String
    - Null
    - Undefined
    - Symbol(ECMAScript 6에 추가)
    - Array: object형
- 프로그램밍을 도울 몇가지 타입이 더 제공
- Any, Void, Never, Unknown
- Enum
- Tuple: object형

# 4. Primitive Type
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 프리미티브 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분
- (ES2015 기준) 6가지
  - Boolean
  - Number
  - String
  - Null
  - Undefined
- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있음
```js
true;
'hello';
3.14;
null;
undefined;
```
- 또는 래퍼 객체로 만들 수 있음
```js
new Boolean(falese); // typeof new Boolean(false) : 'object'
new String('world'); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42) : 'object'
```
- Type Casing
  - TypeScript의 핵심 primitive types은 모두 소문자임
  - Number, String, Boolean, Symbol 또는 Object 유형이 위에서 권장한 소문자 버전과 동일하다고 생각하고 싶을 수 있지만, 이러한 유형은 언어 primitives를 나타내지 않으며, 타입으로 사용해서는 안됨
  - 대신 number, strign, boolean, object and symbol 타입을 사용

# # Template String
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick (=backquote) 기호에 둘려쌓여 있음
- 포함된 표현식은 `${expr}`와 같은 형태로 사용함
- 자바스크립트에서도 사용하는 것임
```js
let fullName: string = `Bob Bobbington`;
let age: number = 38;

let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } tears old next month.`;

// template string을 사용하지 않을 경우
let centence: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
```

