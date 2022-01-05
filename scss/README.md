# SCSS
## SCSS를 활용하는 이유
1. CSS에서 변수를 입력시, 상세 속성으로 입력할 경우 조상요소까지 항상 입력해야되는 경우가 있었는데 SCSS의 중첩기능을 활용하면 짧게 작성할 수 있음
2. 변수라는 개념을 통일해서 한번에 색상같은 것을 입력 시, 오류없게 작성할 수 있게 도와줌
3. 사용자 브라우저에서 돌아갈 수 있는 것은 "CSS"이기 때문에 결국에는 SCSS파일을 컴파일(변환)하여 사용함
- 주석은 `'*/ /*'`, `'//'`의 방법이 있음
- `'*/ /*'` 방법으로 주석을 하게 되면 컴파일을 하게 되면 주석처리한 부분이 css파일에 그대로 들어가버림
- `'//'`의 방법은 컴파일을 하여도 css파일에 주석처리된 부분이 들어가지 않음

## Variables(변수)
> 각각 변수 선언 방식
CSS
```css
body {
  font: 100%,Helvetica, sans-serif;
  color: #333;
}
```
SCSS
```SCSS
$font-stack: Helvetica, sans-serif;
$primary-color: ㅁ#333;

body {
  font: 100%,Helvetica, sans-serif;
  color: #333;
}
```
Sass
```Sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100%,Helvetica, sans-serif
  color: #333
```

## SCSS가 CSS로 변환된 내용을 바로 확인할 수 있는 사이트 URL
[ [SassMeister](https://www.sassmeister.com/) ]로 클릭 이동

## 상위(부모) 선택자 참조
'&'는 상위(부모) 선택자를 치환(바꾸어 놓는 일)할 수 있음
### 예제
SCSS
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
CSS
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