# MARKDOWN
## MARKDOWN 이란?
<br>

### 장점
<p>1. 문법이 쉽고 간결하다.
<p>2. 관리가 쉽다.
<p>3. 지원 가능한 플랫폼과 프로그램이 다양하다.
<br>

### 단점
<p>1. 표준이 없다.
<p>2. 모든 HTML 마크업을 대신하지 못한다.

<br>

# 제목(Header)
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

<br>

# 문장(Paragraph)

정센니 개발공부 문장의 줄바꿈 처리는 `<br>를 사용하거나, '  '띄어쓰기를 두번하면 됨`<br>
이렇게 한다.

<br>

# 강조(Emphasis)
구분 | 방법 | 내용
-- | -- | --
기울기 | _정센니_ | 기울기가 필요한 단어 양쪽에 `'_'`를 붙여주면 됨
두껍게 | **정센니** | 단어를 두껍게 하려면 양쪽에 `'**'`를 붙여주면 됨
기울기,두껍게 | **_정센니_** | 단어를 두껍게 하려면 양쪽에 `'**_ / _**'`를 붙여주면 됨
취소선 | ~~정센니~~ | 원하는 단어에 취소선을 적용하려면 양쪽에 `'~~'`를 붙여주면 됨
밑줄 | <u>정센니<u> | 원하는 단어에 밑줄을 추가하고 싶은 경우 양쪽에 `'<u>'`를 붙여주면 됨

<br>

# 목록(List)
1. 정센니
1. `1.`로만 입력하면 목록의 번호를 1,2,3 이런식으로 각각 지정안해줘도 순서대로 들어가게 됨
    1. `탭 2번`을 하면 목록안의 목록의 번호를 표출할 수 있음
          1. 다음 탭을 만들고 싶으면 여기서 `탭 2번`을 다시하면 됨
2. 센니
3. 센

- 정센니
- 문서가 필요하지 않을 때는 `-`사용
    - `탭 2번`을 하면 목록안의 목록의 번호를 표출할 수 있음
        - 다음 탭을 만들고 싶으면 여기서 `탭 2번`을 다시하면 됨

<br>

# 링크(Links)
방법 | 내용
-- | --
`<a herf="https:/google.com">Google</a>` | `` 기호를 제거해서 입력하세요 - 'html'에서 사용하는 방식으로 링크를 추가
`[]()` | `` 기호를 제거해서 입력하세요 - `[대체 텍스트 명 입력](링크 Url입력)`하여 사용

<br>

# 이미지(Imaages)
방법 | 내용
-- | --
`![]()` or <br> `[![]()]()` | `` 기호를 제거해서 입력하세요 - `![대체 텍스트 명 입력](이미지 Url 입력)`하여 사용 <br> 또는 이미지에 링크를 걸고 싶을 경우는 '!'를 빼고 `[![대체 텍스트 명 입력](이미지 Url입력)](링크 Url입력)`하면 됨

<br>

# 인용문(BlockQuote)
> 남의 말이나 글이나 직접 또는 간접으로 따온 문자, 사용방법은 `>`를 사용하면 됨<br>
> 중첩을 하고 싶은 경우 `>>`, `>>>` 이런식으로 하나씩 늘려가면서 사용하면 됨<br>
> 나는 이게 먼지 몰라서 그냥 썼는데 ㅎㅎ, 나중에 내가 작성한 내용들을 손봐야 할 것 같다.
>> 중첩 1
>>> 중첩 2
>>>> 중첩 3

<br>

# 인라인(inline) 코드 강조
CSS에서 `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽일할 수 있음<br>
사용 방법은 단어 양옆에 백틱(`) 기호를 입력해주면 된다.

<br>

# 블록(Block) 코드 강조
사용밥법은 백틱(`) 기호를 블록 코드 강조하고 싶은 부분 위/아래로 3번씩 입력해준다.

그리고 백틱(```)을 위아래 입력 후 위쪽 옆에 사용하는 언어를 입력해주면 관련 용어로 코드에 하이라이팅을 해준다.

```html
<a herf="https:/google.com" target="_black">Google</a>
```

```css
.list {
  color: red;
}
```

```javascript
function sany() {
  let a = 'AAA'
  return a;
}
```

```bash
$ git cimmit -m '오늘은 Markdown을 마스터해보자'
```

```plaintext
단순하게 글을 블럭강조 할때는 ```옆애 'plaintext'라고 입력해준다.
```

<br>

# 표(Table)
1. 단어 뒤에 `|` 를 이어주면서 표의 상단 내용을 입력한다. 값이 없을 때는 공백으로 나옴<br>
예시로 `'값 | 의미 | 기본값'` 이런식으로 작성해주면 됨<br>
1. `|`와 `-` 를 이용하여 구분선을 만든다. `'--|--'` 이런식으로 작성해주면 됨 (아래를 참고)
2. 구분선을 만들었다면 `|`를 이용하면서 내용을 작성하면 됨, **추가적으로** 표안의 내용을 가운데 또는 왼쪽으로 정렬하고 싶은 경우 `':'`를 이용하여 정렬이 필요한 곳에 입력 `'--|:--:|--:'`

<br>

값 | 의미 | 기본값
--|:--:|--
static | 기준 없음 | o
relative | 요소 자신 | x
absolute | 위치 상 부모 요소 | x
fixed | 뷰포트 | x

<br>

# 수평선(Horizontal Rule)
`'-'` 또는 `'*'` 또는 `'_'`을 연속으로 3번 작성하면 수평선을 만들수 있음
***
---
___


<br>

# 원시 HTML(Raw HTML)
마크다운 문법에도 `html` 문법이 사용되니 해보시길