# BootStrap
 프론트 엔드 오픈 소스 툴킷인 'BootStrap'은 반응형 모바일 우선 사이트를 빠르게 디자인하고 사용자 정의를 할 수 있음

링크 : [ BootStrap ](https://getbootstrap.com/)

<br>

## 1. Docs
- 해당 메뉴로 들어오면 사용방법에 대해 알 수 있음
- [ BootStrap - Docs ](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

<br>

## 2. 프로젝트에 Bootstrap 설치 방법

방법 1. CDN
> index.html 파일 상단 title 태그 아래에 link, script 태그를 추가<br>
> bundler에는 popperjs 까지 포함되어 있음<br>
> 링크 추가로 손쉽게 가져온 만큼 편리하지만 기능 제한이 있음 그래서 아래 `방법 2. 추천`

```
<title>Document</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+Il  RH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```
<br>

방법 2. PackageManager
> `Node.js의 nvm과 npm`을 공부했다면
> 1. 터미널 창을 열어 `npm init -y`를 입력하여, package.json 만들어 주고
> 2. `npm i -D parcel-bundler`을 개발 의존성으로 설치한다.
> 3. 만들어진 `package.json` 파일을 선택하여, `"scripts"` 부분에 `"test"` 삭제하고
> 4. `"dev": "parcel index.html", "build": "parcel build index.html"` 을 작성하여, npm 프로젝트 생성을 완료해 준다.
> 5. 이제 `npm 프로젝트 생성`을 완료하였으니, Bootstrap을 설치해야하니 터미널은 연다.
> 6. 터미널에 `npm install bootstrap`를 입력하여 설치해준다. (강의에서는 `npm install bootstrap@next`으로 설치를 진행하여야 한다고 했는데, 설치하려고 하니 에러가 뜸 - `해당부분을 알고있으신 분이 있다면 피드백을 주었으면 한다.`)
> > 설치를 완료하였으면, 이제 파일 연결이 필요한데, 연결이 필요한 파일에 `import` 를 작성하여 경로를 적어주고 `BootStrap`을 사용하면 된다. (`/` 활용하며, 입력)
```scss
@import "../node_modules/bootstrap/scss/bootstrap" // scss
```
```js
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle' // js
```
<br>

### 결론
`방법 2. PackageManager`로 진행을 해야 Bootstrap 에서 제공하는 색상이나 모든 것들을 내 입맛대로 커스터마이징 할수있음 ( 방법 1. CDN은 내가 원하는데로 수정이 안된다? )