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

<br>

## 4. module
이 옵션은 프로젝트 내에서 다른 유형의 모듈을 처리하는 방법을 결정함

<br>

### 사용방법(예시)
`css` 파일을 컴파일 하려고 하는데, `main.js` 에 아래와 같이 작성하여도 `webpack.config.js`의 파일에 의해 병합되어 `dist` 에 파일이 들어가어 출력이될 것이다.
```js
import '../css/main.css'
```
하지만 문제가 될것은 `webpack.config.js` `css` 파일은 읽을 수는 없으며, 병합하여 내주는 것 밖에 못하기 떄문에 아래와 같은 읽을 수 있는 모듈을 설치 해주어야 함

1. 터미널을 열어 `npm i -D css-loader sytle-loader` 을 입력하여 2개의 패키지를 설치
2. 설치한 패키지 2개를 `webpack.config.js` 에 입력해주어야 함
```js
    clean: true
  },
  // 기존에 작성된 코드 중간 쯤에 적어주었음
  module: {
    rules: [
      {
        test: /\.css$/, // '.css'로 끝나는 문자를 찾는 정규표현식
        use: [
          'style-loader', // html에 css를 삽입하여 읽을 수 있게하는 역할의 패키지
          'css-loader' // 해당 패키지로 javascript 파일에서 css 파일을 해석하는 역할의 패키지
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
```

<br>

### 추가설명
1. `이스케이프 문자(Escape String)`는 백슬래시를 사용해 원래의 의미를 벗어나는 문자를 만들어 낼수 있음, `정규표현식에서 .(마침표)`은 '임의의 한 문자'를 의미하기 때문에, `그 의미에서 벗어나 단순 맞침표로 해석될 수 있도록 이스케이프 문자로 만들어 줘야 함`

<br>

## 5. SCSS
`webpack`에 `scss` 적용하기

<br>

### 사용방법 (예시)
1. 터미널에 `scss` 를 읽을 수 있는 `loader`를 이와 같이 `npm i -D sass-loader sass` 입력하여, 개발 의존성으로 설치해 준다. (여기서 `sass-loader`은 파일을 읽을 수 있게 하는 역할을 가지고, `sass`은 문법을 읽을 수 있게 해주는 역할)
2. 그리고 나서 `webpack.config.js` 에 아래와 같이 입력하여 설치한 패키지 명을 기입해준다.(따로 'sass' 안적어도 되는 듯함)

```js
    clean: true
  },
  // 기존에 작성된 코드 중간 쯤에 적어주었음
  module: {
    rules: [
      {
        test: /\.s?css$/,  // 's'라는 단어가 있을수도 없을수도 있다는 정규표현식
        use: [
          'style-loader',
          'css-loader',
          'sass-lodaer' // webpack에서 scss 파일을 읽을 수 있게 하는 역할의 패키지
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
```

<br>

## 6. Autoprefixer(PostCSS)
브라우저를 제작하는 `밴더사(구글, 마이크로소프트 등)`에서 자신의 브라우저에서 동작할 수 있게 자동으로 붙여주는 플러그인

> 표준 기술이 동작할수 없는 브라우져에서 그 브라우저에 접두사로 적용된 속성에서 실제로 적용될 수 있게 도와주는 것

같이 알아두면 좋은 것으로
> `공급 업체 접두사란?` 밴더 프리픽스(Vender Prefix)
> 주요 웹 브라우저가의 공급자가 새로운 실험적인 기능을 제공할 때 이전 버전의 웹 브라우저에 그 사실을 알려주기 위해 사용하는 접두사를 의미하며, 아직 CSS 권고안에 포함되지 못하거나, 포함은 되었으나 완전히 제정된 상태가 아닌 기능을 사용할 때 벤더 프리픽스를 사용함

<br>

### 사용방법 (예시)
1. 아래와 같이 터미널에 명령어를 입력한다.
```
npm i -D postcss autoprefixer postcss-loader
```
총 3가지의 패키지를 개발 의존성으로 설치한다. 여기서 `postcss` 는 스타일의 후처리를 도와주는 패키지로 그 안에서 `autoprefixer` 라는 공급 업체 접두사를 자동으로 붙여주며, 마지막으로 이 2개의 패키지가 `webpack` 에서 동작할 수 있도록 `postcss-loader` 가 도와준다.

2. 설치를 완료하였으면 `webpack.config.js`로 이동하여 아래처럼 작성해준다. (`rules - use` 부분에 입력된 순서는 아래부터 차차 읽어지면서 올라가는 순임, 해당 작성된 순서로 입력된 것이 좋다.)
```js
    clean: true
  },
  // 기존에 작성된 코드 중간 쯤에 적어주었음
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-lodaer'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
```
3. 이제 `package.json` 파일에 `Parcel`러와 같이 `browerslist` 옵션을 입력해준다.`browerslist`은 npm 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도이다.
```js
 // 작성된 코드의 내용은 전 세계의 점유율이 1% 이상인 모든 브라우저의 현버전외 아래로 2개 까지의 버전까지 지원하겠다는 의미

"browserslist": [
  "> 1%",
  "last 2 versions"
]
```
4. `.postcssrc.js` 파일을 프로젝트 내 생성하여 아래의 코드를 입력해준다.
```js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```
주로 사용하는 `import`, `export` 는 node.js 환경에서는 사용이 불가하여, CommonJS 방식인 `require()`, `module exports` 키워드를 이용하여 javascript 파일을 가져오고 내보냄

5. 위의 단계를 모두 완료하고 개발서버를 오픈하면 종종 에러가 뜰 수도 있는데, 아마 `autoprefixer`와 `postcss`의 버전 충돌이니 거의 `autopreixer`의 버전을 맞추어주면 해결될 것
```js
npm i autoprefixer@9 -D
```
6. 끝으로 개발서버가 들어가지면 개발자도구를 열어서, 공급업체 접두사가 확인된다면 설치가 완료된 것임

<br>

### 추가설명
1. `require()` : 해당 메서드를 통해 외부 모듈을 가져올 수 있음, 파라미터로 추가할 모듈의 파일 경로값을 받음
```js
const sany = require('파일 경로');
```
2. `module exports` : `require()` 함수를 사용했을 때 반환 받는 변수, 비어 있는 객체가 기본값이며, 어떤 것으로도 자유롭게 변경할 수 있음
3. `exports` : 자체는 절대 반환되지 않음, `exports`는 단순히 `module exports` 를 참조하고, 이 변수는 사용하면 모듈을 작성할 때 더 적은 양의 코드로 작성할 수 있음
```js
exports.method = function () { /* ... */ }
// vs.
module.exports.method = function () { /* ... */ }
```

<br>

## 7. Babel
Babel은 ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript 트랜스컴파일러

<br>

### 설치방법 및 설정
1. 터미널을 열어 개발 의존성 모듈로 3가지를 설치
```
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime
```
2. 설치 완료 후 `.babelrc.js` 마침표로 시작하는 구성 옵션이나 숨김파일을 의미하는 파일을 만들어 준다.
3. 만들어진 파일 내에 아래의 코드를 작성
```js
module.exports = {
  presets: ['@babel/preset-env'], // 일일이 명시해주어야 하는 javascript 명령을 한번에 지원하는 패키지
  plugins: [
    // 비동기 처리를 위한 plugin, 2차원 배열로 작성됨
    ['@babel/plugin-transform-runtime']
  ]
}
```
4. `webpack.config.js`로 이동하여 아래처럼 코드를 작성
```js
  module: {
    rules: [
      { // 지난번 Autoprefixer 설치시 작성했던 것
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      { // 이부분
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
```
위 처럼 작성시, `.js` 확장자로 끝나는 파일들을 `webpack` 에서 `babel-loader` 로 읽어들여 `Babel`이 적용될 수 있도록 해준다.

5. 마지막으로 `babel-lodar`를 설치해주면 끝
```
npm i -D babel-loader
```
<br>

## 끝으로
> 위의 내용을 완료시, `프로젝트에서 작성하는 모든 Javascript`는 Babel을 통해 ES5버전으로 변환되어 브라우저에서 동작하게 됨

> 추가로 확인할 사항은 Babel도 "browserslist": ["> 1%", "last 2 versions"] 을 package.json파일에 추가시켜 주어야 함(JavaScript 문법을 최적화 하기 때문에)




<br><br><br><br><br>

## #. 에러가 너무 많아서 작성해둠
현재 페캠 강의를 들으면서 `npm run dev 또는 npm run build` 를 할때 애러가 자꾸 뜨고있다. 그래서 `npm ERR! code ELIFECYCLE` 를 구글에 검색해보니 해결책은 이랬다.

1. 일단 캐시 제거
2. node modules 제거
3. package-lock.json 제거
4. npm install(설치)

```
npm cache clean --force

rm -rf node_modules package-lock.json

npm install
```
<br>

### 추가 설명
명령어 | 설명
-- | --
rm | 명령어는 디렉토릴 삭제
-rf | 하위 디렉토리까지 강제로 삭제

<br>

## #. 또 다른 에러 [webpack-dev-middleware] HookWebpackError: Not supported
이번 에러는 `[webpack-dev-middleware] HookWebpackError: Not supported` 였는데, 위에 작성한 방법으로는 해결이 안되었고 내용을 확인해보니 아마도 `copy-webpack-plugin`의 버전이 높아서 호환이 안되서 뜬것으로 판단되었다. 그래서 아래와 같이 `plugin의 버전`을 다운하니 해결되었음

```
npm install copy-webpack-plugin@9 -D
```

또 다른 방법으로는 노드버전이 낮을 수도 있기 때문에 노드 버전을 업그래이드하라는 소리도 있었음
```
npm install code@버전 -g
```
