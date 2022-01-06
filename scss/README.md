# SCSS
## 1. SCSS를 활용하는 이유
1. CSS에서 변수를 입력시, 상세 속성으로 입력할 경우 조상요소까지 항상 입력해야되는 경우가 있었는데 SCSS의 중첩기능을 활용하면 짧게 작성할 수 있음
2. 변수라는 개념을 통일해서 한번에 색상같은 것을 입력 시, 오류없게 작성할 수 있게 도와줌
3. 사용자 브라우저에서 돌아갈 수 있는 것은 "CSS"이기 때문에 결국에는 SCSS파일을 컴파일(변환)하여 사용함
- 주석은 `'*/ /*'`, `'//'`의 방법이 있음
- `'*/ /*'` 방법으로 주석을 하게 되면 컴파일을 하게 되면 주석처리한 부분이 css파일에 그대로 들어가버림
- `'//'`의 방법은 컴파일을 하여도 css파일에 주석처리된 부분이 들어가지 않음

<br>

> ### SCSS가 CSS로 변환된 내용을 바로 확인할 수 있는 사이트 URL
> [ [SassMeister](https://www.sassmeister.com/) ]로 클릭 이동

<br>

## 2. Variables(변수)
> 각각 변수 선언 방식<br>
> 주의사항으로는 선언된 범위에서 유효범위를 가짐 (javascript처럼 전역변수, 지역변수 같은 개념으로 이해하면 쉬움)

<br>

### 예제
- CSS
```css
body {
  font: 100%,Helvetica, sans-serif;
  color: #333;
}
```
- SCSS
```SCSS
$font-stack: Helvetica, sans-serif;
$primary-color: ㅁ#333;

body {
  font: 100%,Helvetica, sans-serif;
  color: #333;
}
```
- Sass
```Sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100%,Helvetica, sans-serif
  color: #333
```
<br>

## 3. 상위(부모) 선택자 참조
> '&'는 상위(부모) 선택자를 치환(바꾸어 놓는 일)할 수 있음

<br>

### 예제
- SCSS
```SCSS
.btn {
  position: absolute;
  &active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      bargin-right: 0;
    }
  }
}
```
- CSS
```CSS
.btn {
  position: absolute;
}
.tbn.active {
  color: red;
}
.list li:last-child {
  margin-right: 0;
}
```
<br>

## 4. 중첩된 속성
> `반복적으로 사용되는 이름들`은 선택자를 선택자로 사용하데, `':'`를 사용하고 끝나는 부분에 `';'`을 작성해줘야된다.
> ****
> `네임스페이스란?`<br>
> 이름을 통해 구분 가능한 범위를 만들어내는 것으로 일종의 유효범위를 지정하는 방법을 말함
> <br>이해를 위해 또 적으면, 같은 이름이 같은 유요한 범위를 의미한다.

<br>

### 예제
- SCSS
```SCSS
.box {
  font: {
    weight: bold;
    size: 16px;
    family: sans-serif;
  };
  margin: {
    top: 10px;
    left: 20px;
  };
  padding: {
    top: 10px;
    bottom: 40px;
    left: 20px;
    right: 30px;
  };
}
```
- CSS
```CSS
.box {
  font-weight: bold;
  font-size: 16px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 30px;
}
```

<br>

## 5. 산술 연산
> javascript의 산술 연산자와 똑같음<br>
> `'SCSS'`에서는 단위는 동일하게 작성해주어야 함 (%면 %, px면 px)<br>
> 하지만 calc()함수를 사용하면 괜찮음(CSS에는 변한것 없이 출력되지만 실제 화면에는 적용이 됨)<br>
> 그리고 `'SCSS'`에서는 `'/'(나누기)` 를 그냥 작성할 경우, `'CSS'`에서 사용하는 단축 속성으로 판단하기에 따로 연산이 되지않음<br>
> 따라서 사용하기 위해서는 `'()'`를 이용하여 사용하거나 변수를 설정하여 사용할 수 있음

<br>

### 예제
- SCSS
```SCSS
div {
  // &size: 30px
  width: 20px + 2px; // 더하기
  height: 40px - 10px; // 뺴기
  font-size: 10px * 2; // 곱하기
  margin: (30px / 2); // 나누기, '$size / 2', 또는 '(10px + 10px) / 2'와 같은 식으로 작성하여도 가능
  padding: 20px % 7; // 나누고 나머지
}
```
- CSS
``` CSS
div {
  width: 22px;
  height: 30px;
  font-size: 20px;
  margin: 15px;
  padding: 6px;
}
```

<br>

## 6. 재활용(Mixins)
> `'@mixin'` 을 사용하여, 재활용할 코드를 작성 후 `'@include'` 라는 코드을 앞에 적은 후 사용하면 됨

<br>

### 예제
- SCSS
```SCSS
@mixin  center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  @include center;
  .item {
    @include center;
  }
}
.box {
  @include center;
}
```
- CSS
``` CSS
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

> 아래와 같이도 사용할 수 있음<br>
> `'@mixin 땡땡($땡 = 매개변수)'`으로 변수를 선언하였으면 다른 `'@include 땡땡(? = 인수)'` 변수의 `'(? = 인수)'`안에도 값을 지정해 주어야하거나  `'(?: 100px)'`와 같이 `':'`을 사용하여 기본값을 지정해주면 값을 모두 지정해주지 않아도 괜찮음

<br>

### 예제
- SCSS
```SCSS
@mixin  box($size: 100px, $color: tomato) { // 함수를 작성하듯이 ','를 사용하여 여러게 지정해 줄 수 있음
    width: $size;
    height: $size;
    background-color: $color;
}
.container {
  @include box(200px, red);
  .item {
    @include box($color: green); // 하나만 지정할 경우 키워드를 작성하여 값을 적으면 됨 (키워드인수라고 함)
  }
}
.box {
  @include box(80px);
}
```
- CSS
``` CSS
.container {
  width: 200px;
  height: 200px;
  background-color: red;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: green;
}

.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
}
```
<br>

## 7. 반복문
### 예제
- SCSS
```SCSS
// for (let i = 0; i < 10; i += 1) {
//    console.log(`loop-${i}`) scss에서는 보간에 ${} $를 사용하지 못하니 #으로 사용할 수 있음
//}

@for $i from 1 through 5 {
    .box:nth-child(#{$i}) { // 선택자인 경우는 값을 적는 부분이 아니기 때문에 보간 처리를 한 것이고
        width: 100px * $i; // 실제로 값을 적는 부분이기 떄문에 따로 보간을 해줄 필요가 없음
    }
}
```
- CSS
``` CSS
.box:nth-child(1) {
  width: 100px;
}

.box:nth-child(2) {
  width: 200px;
}

.box:nth-child(3) {
  width: 300px;
}

.box:nth-child(4) {
  width: 400px;
}

.box:nth-child(5) {
  width: 500px;
}
```
<br>

## 8. 함수
> `'@'` 를 사용하여 거의 javascript와 유사하게 사용할 수 있음

<br>

### 예제
- SCSS
```SCSS
@mixin  center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@function ratio($size, $ratio) {
    @return $size * $ratio
}

.box {
    $width: 160px;
    width: $width;
    height: ratio($width, 9/16);
    @include center;
}
```
- CSS
``` CSS
.box {
  width: 160px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
<br>

## 9. 색상 내장 함수
속성명 | 설명 | 사용방법
-- | -- | --
mix() | 2개의 색을 섞어서 표현 | mix($color, red);
lighten() | 1번째 인수의 색상을 밝게 만듬 | lighten($color, 10%);
darken() | 1번째 인수의 색상을 어둡게 만듬 | darken($color, 10%);
saturate() | 1번쨰 인수의 색상을 채도를 올림 | satruate($color, 40%);
desaturate() | 1번쨰 인수의 색상을 채도를 낮춤 | desatruate($color, 40%);
grayscale() | 2번째 인수가 필요없고 주어진 색상을 회색으로 만들어줌 | grayscale($color);
invert() | 2번째 인수가 필요없고 색상을 반전시켜줌 | invert($color);
rgba() | 1번째 인수의 색상을 투명하게 만들어줌 | rgba($color, .5);
<br>

### 예제
- SCSS
```SCSS
.box {
    $color: royalblue;
    width: 200px;
    height: 20px;
    border-radius: 10px;
    background-color: $color;
    &:hover {
        background-color: darken($color, 10%);
    }
    &.built-in {
        background-color: grayscale($color);
    }
}
```
- CSS
``` CSS
.box {
  width: 200px;
  height: 20px;
  border-radius: 10px;
  background-color: royalblue;
}
.box:hover {
  background-color: #214cce;
}
.box.built-in {
  background-color: #919191;
}
```
<br>

## 10. 가져오기
> `@import` 을 통해서 작성해주면 됨<br>
> `@import url("")` 라고 작성하지 않고 `@import "./sub", "./sub2"` 식으로 작성하여 하나의 임폴트 값 말고도 여러개를 작성할 수 있음

<br>

### 예제
- SCSS
```SCSS
@import "./sub", "./sub2.scss";

$color: royalblue;

.container{
  h1 {
    color: $color;
  }
}
```

<br>

## 11. 데이터의 종류
### 예제
- SCSS
```SCSS
$number: 1; // .5, 100px, 1em
$string: bold; // relative, "../images/a.png"
$color: red; // blue, #ffff0, rgba(0,0,0,.1)
$boolean: true; // false
$null: null;
$list: orange, royalblue, yellow; // 배열(Array)데이터와 유사함
$map: ( // 객체(objec) 와 유사
    o: orange, // key, value
    r: royalblue,
    y: yellow
);

.box {
    width: 100px;
    color: red;
    position: relative;
}
```

<br>

## 12. 반복문 @each
> `@each 변수 in $list` 처럼 리스트에 있는 해당 데이터들은 새로운 변수에 담에 반복적으로 뿌려 줌<br>
> `@each $key, $value in $map` 또는 축약으로 `@each $k, $v in $map`의 경우 동일한게 반복적으로 뿌려주며 아래 예시 참고

<br>

### 예제
- SCSS
```SCSS
$list: orange, royalblue, yellow; // 배열(Array)데이터와 유사함
$map: ( // 객체(objec) 와 유사
    o: orange, // 키와 벨류
    r: royalblue,
    y: yellow
);

@each $d in $list {
    .box {
        color: $d;
    }
}

@each $k, $v in $map {
    .box-#{$k} {
        color: $v;
    }
}
```
- CSS
```CSS
.box {
  color: orange;
}

.box {
  color: royalblue;
}

.box {
  color: yellow;
}

.box-o {
  color: orange;
}

.box-r {
  color: royalblue;
}

.box-y {
  color: yellow;
}
```

<br>

## 13. 재활용 @content
> `@mixin` 을 사용하여, 재활용할 코드를 작성된 곳에 `@content` 를 사용하여 재활용 내용을 추가해줄 수 있음

<br>

### 예제
- SCSS
```SCSS
@mixin  left-top {
    position: absolute;
    top: 0;
    left: 0;
    @content;
}
.container {
    width: 100px;
    height: 100px;
    @include left-top;
}
.box {
    width: 200px;
    height: 300px;
    @include left-top {
        bottom: 0;
        right: 0;
        margin: auto;
    }
}
```
- CSS
``` CSS
.container {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
}

.box {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```
