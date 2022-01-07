# Webpack
> Webpack은 Node.js 환경에서 실행되고 npm으로 설치할 수 있다.

> Javascript, Html, Css, 이미지 등과 같은 여러개의 Assets을 웹 브라우저가 이해할 수 있는 번들로 묶고, 패킹할 수 있는 Javascript Module Bundler로 의존성이 있는 Module을 취하여 대표하는 정적 자산들을 생성한다.

> 정적 자산들이란? 움직임이 없이 고정된 자산들을 말하며 Webpack은 여러가지의 모듈을 main.js에 통합 해준다.

## 1. 프로젝트 생성
1. 터미널을 열고 `npm i -D webpack webpack-cli webpack-dev-server@next` 의 3가지 옵션을 설치한다.
2. `package.json` 파일을 클릭하여 `scripts` 부분에 아래와 같이 입력해준다.
3. 기타로 터미널로 설치한 `devDependencies`의 내용도 확인해 준다.
```json
// package.json

{
  "name": "Webpack-Bundler",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.65.0", // Bundler가 동작하기 위한 핵심 킷
    "webpack-cli": "^4.9.1", // 터미널에서 입력하는 여러가지 명령들을 커맨드라인 인터페이스 지원하는 킷
    "webpack-dev-server": "^4.0.0-rc.1" // 바로바로 dev를 새로고침해줌
  }
}
```

<br>

## 2. entry, output
프로젝트 내 `webpack.config.js` 파일을 생성 후, 기본적으로 3가지를 포함한다.
구분 | 설명
-- | --
mode | webpack에 내장된 최적화를 사용하도록 지시하는 것으로 none, development, production(기본값)이 존재
entry | 파일을 읽어들이기 시작하는 진입점 / 쉽게 설명하면 webpack bundler에 누가 참여할 것인가?
output | 결과물(번들)을 어디로 반환할 것인가?
<br>

```js
// import
const path = require('path')
const { CleanPlugin } = require('webpack')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  }
}
```
<br>

### 추가 설명
1. `require()` 를 통하여 외부 모듈을 가져올 수 있다. (require() 메서드는 node가 local object에 추가한 메서드로서 아래와 같이 파라미터로 추가할 모듈의 파일 경로값을 받음)
```js
const path = require('파일 경로');
```
2. `.resolve( , )`를 통하여 2개의 인수 경로를 합쳐줄 수 있다
3. 위에서 사용한 `__diname` 은 현재 파일이 생성되어 있는 경로를 지칭한다.
4. `output의 path와 filename`을 설정하지 안아도 `output의 결과(반환하는 지점)`는 같다.
5. `clean` 새롭게 빌드할때 기존에 필요하지않은 내용들을 제거하고 결과물을 빌드할수 있게 해줌
6. [ [ webpack.js.org ] ](https://webpack.js.org/) GNB영역의 'DOCUMENTATION' 엄청 많은 내용이 있으니 참고

<br>

## 3. plugins
plugins을 사용하여 파일 생성을 단순화할 수 있음(템플릿을 사용하여 로드)

### 사용방법
1. 터미널을 열어 `npm i -D html-webpack-plugin` 을 입력
2. 설치완료 후 `webpack.config.js` 로 이동하여, const로 변수를 설정하여 `html-webpack-plugin` 의 모듈의 파일 값을 받아온다.
3. 그리고 어디에서 실행할 자리에 `plugins` 를 입력하여 정보를 적어준다.

```js
// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    host: 'localhost'
  }
}
```
> 위와 같이 template 부분에 경로를 적어주면 생성된 프로젝트 내에 있는 파일을 지칭하게 되고 `entry` 부터 시작하여, `output > plugins` 순으로 읽어지게 된다.

> 그리고 나서 읽어진 것들이 병합되어 `dist`에 만들어지게 됨