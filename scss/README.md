# SCSS
## 1. SCSS를 활용하는 이유
1. CSS에서 변수를 입력시, 상세 속성으로 입력할 경우 조상요소까지 항상 입력해야되는 경우가 있었는데 SCSS의 중첩기능을 활용하면 짧게 작성할 수 있음
2. 변수라는 개념을 통일해서 한번에 색상같은 것을 입력 시, 오류없게 작성할 수 있게 도와줌
3. 사용자 브라우저에서 돌아갈 수 있는 것은 "CSS"이기 때문에 결국에는 SCSS파일을 컴파일(변환)하여 사용함
- 주석은 `'*/ /*'`, `'//'`의 방법이 있음
- `'*/ /*'` 방법으로 주석을 하게 되면 컴파일을 하게 되면 주석처리한 부분이 css파일에 그대로 들어가버림
- `'//'`의 방법은 컴파일을 하여도 css파일에 주석처리된 부분이 들어가지 않음
****

### SCSS가 CSS로 변환된 내용을 바로 확인할 수 있는 사이트 URL
[ [SassMeister](https://www.sassmeister.com/) ]로 클릭 이동

## 2. Variables(변수)
> 각각 변수 선언 방식<br>
> 주의사항으로는 선언된 범위에서 유효범위를 가짐 (javascript처럼 전역변수, 지역변수 같은 개념으로 이해하면 쉬움)

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

## 3. 상위(부모) 선택자 참조
> '&'는 상위(부모) 선택자를 치환(바꾸어 놓는 일)할 수 있음
****

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

## 4. 중첩된 속성
> `반복적으로 사용되는 이름들`은 선택자를 선택자로 사용하데, `':'`를 사용하고 끝나는 부분에 `';'`을 작성해줘야된다.
> ****
> `네임스페이스란?`<br>
> 이름을 통해 구분 가능한 범위를 만들어내는 것으로 일종의 유효범위를 지정하는 방법을 말함
> <br>이해를 위해 또 적으면, 같은 이름이 같은 유요한 범위를 의미한다.
> ****
> 아래와 같이 작성하면 됨
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

## 5. 산술 연산
> javascript의 산술 연산자와 똑같음<br>
> `'SCSS'`에서는 단위는 동일하게 작성해주어야 함 (%면 %, px면 px)<br>
> 하지만 calc()함수를 사용하면 괜찮음(CSS에는 변한것 없이 출력되지만 실제 화면에는 적용이 됨)<br>
> 그리고 `'SCSS'`에서는 `'/'(나누기)` 를 그냥 작성할 경우, `'CSS'`에서 사용하는 단축 속성으로 판단하기에 따로 연산이 되지않음<br>
> 따라서 사용하기 위해서는 `'()'`를 이용하여 사용하거나 변수를 설정하여 사용할 수 있음

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

## 6. 재활용(Mixins)
