# React
리액트는 개발을 위해 다른 라이브러리들의 지원이 필요한 유연한 프레임워크

<br>

## Keyword
```plaintext
1. Angular vs React vs Vue
2. View를 다루는 라이브러리
3. Only Rendering & Update
 - NOT included another functionality(ex. http client, ...)
4. Component Based Development
 - 독립적인 코드 블럭(HTML + CSS +  JavaScript)
 - 작업의 단위
5. Virtual DOM
 - 이제는 DOM을 직접 다루지 않음
6. JSX
 - NOT Templates
 - transpile to JS (Babel, TypeScript)
7. CSR $ SSR
```

<br>

## 1. Angular vs React vs Vue
### 1. Angular
> ‘앵귤러’는 프로젝트 생성에서부터 코드 최적화 작업에 이르기까지 모든 작업에서 사용할 수 있는 폭넓은 프레임워크이기 때문에, 전체적인 개발 과정에 있어서는 가장 다루기 힘든 프레임워크라고 할 수 있음
>
> 하지만 앵귤러는 선택할 수 있는 많은 기능들이 있기에, 개발자들은 어떠한 호스트(host)앱이라 하더라도 간단한 명령을 통해 완전히 최적화된 번들(bundle)앱을 만들 수 있음

<br>

No|특징
--|--
1|크로스 플랫폼 : 어떤 플랫폼에서든지 하나의 코드베이스로 결과를 낼수있음
2|기능이 풍부하고 규모가 큰 애플리케이션을 개발할 때
3|믿을 수 있고 확장 가능한 프레임워크가 필요할 때
4|채팅 앱이나 메시징 앱과 같은 실시간 애플리케이션을 개발할 때
5|장기프로젝트이며, 투자규모도 상당한 네이티브 앱이나 하이브리드 앱, 또는 웹앱을 개발할 때
6|타입스크립트(TypeScript)로 코딩해야 할 때
7|객체지향(Object-oriented)프로그래밍을 해야 할 때

<br>

### 2. React
> 리액트에는 ‘앵귤러’나 뷰에서와 같은 도구들이 없지만 대신에 유연성을 제공하고 있음
>
> 원하는 어떠한 라이브러리라도 리액트에 맞춰 넣을 수 있음
>
> 크리에이트 리액트 앱(Create React App)이나 넥스트(Next.js)와 같은 명령줄 인터페이스(CLI) 도구들도 있생겨나고 있음

<br>

No|특징
--|--
1|빠른 일정 안에 엔터프라이즈 수준의 가벼우면서도 현대적인 애플리케이션을 개발해야 할 때
2|웹사이트 개발 솔루션을 안전하게 보호할 수 있는 유연한 프레임워크가 필요할 때
3|크로스 플랫폼(cross-platform) 애플리케이션이나 싱글 페이지 애플리케이션(SPA)을 개발할 때
4|기존의 앱에서 기능성을 확장할 때
5|강력한 커뮤니티 지원과 솔루션이 필요할 때

<br>

### 3. Vue
> ‘앵귤러’나 리액트와 비교해서 뷰는 프리코딩(pre-coding) 구조를 가지고 있어서, 그 성능을 양보하지 않고도 애플리케이션을 빠르게 개발할 수 있게 해줌
>
> 그리고 명령이 쉽기 때문에, 개발과정에서 원하는 것을 정확하게 이용할 수 있음
>
> 앱개발이 쉽고 빠름

<br>

No|특징
--|--
1|시장 진입 단계에서 필요한 프레임워크를 선택할 때
2|작고 가벼운 애플리케이션을 개발할 때
3|기존의 프로젝트에서 현대적이지만 제한된 리소스를 가진 프레임워크로 마이그레이션을 해야할 때
4|기업이 아니라 사용자 커뮤니티의 지원을 받는 프레임워크를 원할 때

<br>

#### 참고
[- 페스트캠퍼스 : 한번에 끝내는 프론트엔드 개발 초격차 패키지 Online. 10-1-1편](https://fastcampus.app/courses/203720/clips/237904?organizationProductId=2104)

[- 앵귤러, 뷰, 리액트 어떤 것을  선택해야 좋을까?](http://blog.wishket.com/%EC%95%B5%EA%B7%A4%EB%9F%AC-vs-%EB%A6%AC%EC%95%A1%ED%8A%B8-vs-%EB%B7%B0-%EC%96%B4%EB%96%A4-%EA%B2%8C-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%84%A0%ED%83%9D%EC%9D%BC%EA%B9%8C/)

<br>

## 2. Component란?
src, class, name, props 밖에서 넣어준느 데이터

문서(html), 스타일(css), 동작(javascript)을 합쳐서 내가 만든 일종의 태그를 뜻함

```html
<img src="이미지 주소" />

<button class="클래스 이름">버튼</button>
```

```html
<내가지은이름1 name="Mark" />
<내가지은이름 prop={fale}>내용</내가지은이름>
```

<br>

## 3. DOM이란?
DOM을 직접 제어하는 경우
- 바뀐 부분만 정확히 바꿔야 한다.

DOM을 직접 제어하지 않는 경우
- 가상의 돔 트리를 사용해서,
- 이전 상태와 이후 상태를 비교하여
- 바뀐 부분을 찾아내서 자동으로 바꾼다.

<br>

## 4. CSR / SSR
### CSR
- JS가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행되기 전까지는 화면이 보이지 않음
- JS가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 화면이 보이면서 유저가 인터렉션 가능

#### React Client Side Rendering(CSR) 순서
1. Server Sending Response to Browser
2. Browser Downloads JS
3. Browser executes React
4. Page Now Viewable and interactable

<br>

### SSR
- JS가 전부 다운로드 되지 않아도, 일단 화면은 보이지만 유저가 사용 할 수 없음
- JS가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 유저가 사용 가능

#### React Server Side Rendering(SSR) 순서
1. Server Sending Ready to be rendered HTML Response to Browser
2. Browser Renders the page, Now Viewable and Browser Downloads JS
3. Browser executes React
4. Page Now interactable

### 결론
`SSR`을 도입하는것이 쉽지않기 떄문에, `개발의 난이도`와 `분명한 효과`를 위한다면 `SSR`을 추천하고 다른 이유로 해야된다면  다른 이유에 맞는 솔루션을 도입하는 것이 맞아보임

<br>

## 5. React 라이브러리 - 1
### 리액트가 하는일
1. 리액트의 핵심 모듈 2개
```js
// 1. 리액트 컴포넌트 => HTMLElement 연결하기
import ReactDOM from 'react-dom';

// 2. 리액트 컴포넌트 만들기
import React from 'react'
```

2. "만들어진 리액트 컴포넌트"를 실제 HTMLElement에 연결할 때 ReactDOM 라이브러리를 이용함
- https://reactjs.org/docs/react-dom.html
- https://ko.reactjs.org/docs/react-dom.html

3. {React 컴포넌트} 만들기 : 리액트 컴포넌트를 만들 때 사용하는 API 모음
- https://reactjs.org/docs/react-api.html
- https://ko.reactjs.org/docs/react-api.html

4. Use React, ReactDOM Library with CDN
CDN을 통한 리액트 라이브러리 사용
- https://reactjs.org/docs/cdn-links.html
- https://ko.reactjs.org/docs/cdn-links.html

<br>

## 6. React 라이브러 - 2
1. 기존 프론트 엔드의 작업방식 : html로 문서 구조를 잡고, css로 스타일을 입히고, javascript로 dom을 조작하였음
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      border: 0;
    }
    #root p {
      color: white;
      font-size: 20px;
      background-color: green;
      text-align: center;
      width: 200px;
    }
    #btn_plus {
      background-color: red;
      border: 2px, solid #000000;
      font-size: 15px;
      width: 200px;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <button id="btn_plus">+</button>
  <script type="text/javascript">

    const root = document.querySelector('#root');
    const btn_plus = document.querySelector('#btn_plus');

    let i = 0;

    root.innerHTML = `<p>init : 0</p>`;

    btn_plus.addEventListener("click", () => {
      root.innerHTML = `<p>init : ${++i}</p>`;
    });

  </script>
</body>
</html>
```

<br>

2. 컴포넌트를 활용한 프론트엔드 : 컴포넌트를 정의하고, 실제 DOM에 컴포넌트를 그려줌
```js
    const component = {
      message: "init",
      count: 0,
      render() {
        return `<p>${this.message} : ${this.count}</p>`;
      },
    };

    function render(rootElement, component) {
      rootElement.innerHTML = component.render();
    }

    // 초기화
    render(document.querySelector("#root"), component);

    document.querySelector("#btn_plus").addEventListener("click", () => {
      component.message = "update";
      component.count = component.count + 1;

      render(document.querySelector("#root"), component);
    });
```

<br>

3. 리액트로 변경할 경우