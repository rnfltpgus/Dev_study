# Bundler
## Bundler의 종류
구분 | 장점 | 단점
-- | -- | --
Parcel | 구성 없는 단순한 자동 번들링(Bundler 설정에 많은 시간을 사용할 수 없을 경우 추천), 소/중형 프로젝트에 적합 | -
Webpack | 매우 꼼꼼한 구성, 레퍼런스 많음, 중/대형 프로젝트에 적합 | 디테일한 옵션을 지원해주기 때문에 확인해야될 사항이 많음
Rollup | 'Tree Shaking'과 같이 효율성을 고려하는 프로젝트에 적합 | 다른 번들러에서 쉽게 작업할 수 있는 것들을 하기위해서 많은 플러그인이 필요할 수 있음

> Tree Shaking 이란?
> - JavaScript 컨텍스트에서 일반적으로 사용되는 용어
> - 코드를 최적화할때 적용되는 데드 코드 제거 기술 (사용하지 않는 코드를 제거하는 방식)

<br>

## 1. 정적 파일 연결
1. 터미널을 열어 `npm i -D parcel-plugin-static-files-copy`를 입력
2. `package.json`에 아래와 같이 경로를 입력
```json
  "staticFiles": {
    "staticPath": "static"
  }
```
3. 프로젝트 내 `static` 폴더 생성 후, 'ico, 이미지 등의 파일'을 넣어주면 package.json에 작성한 옵션을 통해서 `static` 폴더내용을 `dist`라는 폴더에 복사 붙여넣기를 해주게 되어 정적 파일 연결을 완료하게 됨

[ [ 참고 사이트 ] ](https://www.npmjs.com/package/parcel-plugin-static-files-copy) 스크롤을 내려 Example 내용확인

<br>

## 2. autoprefixer
브라우저를 제작하는 `밴더사(구글, 마이크로소프트 등)`에서 자신의 브라우저에서 동작할 수 있게 자동으로 붙여주는 플러그인

> 표준 기술이 동작할수 없는 브라우져에서 그 브라우저에 접두사로 적용된 속성에서 실제로 적용될 수 있게 도와주는 것

같이 알아두면 좋은 것으로
> `공급 업체 접두사란?` 밴더 프리픽스(Vender Prefix)
> 주요 웹 브라우저가의 공급자가 새로운 실험적인 기능을 제공할 때 이전 버전의 웹 브라우저에 그 사실을 알려주기 위해 사용하는 접두사를 의미하며, 아직 CSS 권고안에 포함되지 못하거나, 포함은 되었으나 완전히 제정된 상태가 아닌 기능을 사용할 때 벤더 프리픽스를 사용함

<br>

### 설치 방법
1. 터미널을 열어 `npm i -D postcss autoprefixer` 을 입력하여 첫번째, 두번쨰 모듈을 설치해 줌
2. `package.json`파일로 이동하여, `"browserslist": ["> 1%", "last 2 versions"]`를 작성해 줌 (설정하는 이유는 'autoprefixer'에서 이 옵션을 가지고 설정하기 때문)
> `browserslist` 옵션은 현재 NPM 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도이며, 그 명시를 Autoprefixer 패키지가 활용하게 됨<br>
> `["> 1%", "last 2 versions"]`의 뜻은 전세계의 점유율이 1%에 해당하는 브라우져들과 해당하는 브라우져들의 2개 버전까지는 지원하겠다는 뜻
3. autoprefixer를 설치하는 프로젝트 안에 `.postssrc.js` 파일을 만든다.
> 뒤에 `rc`(Runtime Configuration의 약어)가 붙은 파일은 구성 파일을 의미<br>
> `.`가 붙는 파일은 구성 옵션이나 숨긴파일을 의미함
4. 마지막으로 파일을 만든 후 아래의 코드를 작성해주면 된다.(이때 일반적인 작성 방법과는  조금 다른데 비교 예제를 아래에서 확인할 수 있음)

- 일반적 자바스크립트 작성 시
```js
// ESM - 애크마스크립트 모듈(javascript의 표준 명칭이고 모듈개념), 브라우저 환경
import autoprefixer from 'autoprefixer'
 export {
   plugins: [
     autoprefixer
   ]
}
```
- '.postssrc.js' 작성 시,
```js
// CommonJS - node.js 환경에서는
const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    autoprefixer
  ]
}
```
```js
// 간소화 가능
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

<br>

## 3. Babel
Babel은 ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript 트랜스컴파일러

<br>

### 설치 방법
1. 터미널을 열어 `npm i -D @babel/core @babel/preset-env` 두개의 패키지를 설치
2. `.babelrc.js` 파일을 만든다.
> 뒤에 `rc`(Runtime Configuration의 약어)가 붙은 파일은 구성 파일을 의미<br>
> `.`가 붙는 파일은 구성 옵션이나 숨긴파일을 의미함
3. 생성된 파일안에 아래의 소스를 작성
```js
module.exports = {
  presets: ['@babel/preset-env']
}
```
<br>

### 끝으로
> 위의 내용을 완료시, `진행중인 프로젝트의 모든 자바스크립트는 Babel을 통해서 ES5 문법으로 변환하여 동작`

> 끝으로 추가로 확인할 사항은 Babel도 `"browserslist": ["> 1%", "last 2 versions"]` 을 `package.json`파일에 추가시켜 주어야 함(JavaScript 문법을 최적화 하기 때문에)

<br>

## 4. CLI
[ [ 참고 사이트 ] ](https://ko.parceljs.org/cli.html) 커맨드 라인 인터페이스(CLI)
