# Git
## 1. 버전 생성과 업로드의 이해
해당 표의 내용을 순서대로 따라하면 git에 버전 생성 및 커밋을 할 수 있음

순서 | 구분 | 설명 | 비고
-- | -- | -- | --
1 | git init | 현재 프로젝트에서 변경사항 추적(버전관리)을 시작하겠다는 뜻 |
2 | git add index.html | 변경사항을 추적할 특정 파일(index.html)을 지정 |
2 | git add . | 모든 파일의 변경사항을 추적하도록 지정 | 변경 사항이 있을 때마다
3 | git commit -m '메시지 작성 공간' | 메시지(-m)와 함께 버전을 생성 | 변경사항이 있으면 2번 add 후 다시 3번 commit
4 | GitHub (remote, 원격) | GitHub를 통하여 원격저장소를 만든다. |
5 | git remote add origin ~ | origin이란 별칭으로 원격 저장소를 연결 | ~ 부분에 GitHub 저장소의 URL 입력
6 | git push origin master | origin이란 별칭의 원격 저장소로 버전 내역 전송 |

<br>

## 2. 수정사항 버전 생성(Cimmit)
위의 내용을 참고하여, `commit`은 진행하면 되고, 아래는 수정에 대한 용어 설명

### 용어설명
용어 | 설명
-- | --
Modified | 수정되었다는 표시며, 약어로는 'M'
git status | 현재 프로젝트 내 파일들의 상태를 체크하는 용어
git log | 지금까지 만들었었던 버전의 로 그를 확인하는 용어
HEAD | `git log`를 입력 후 로그를 확인시, `HEAD`라고 표시되어있는 부분의 git 저장소에 있는 가장 최신의 현재상태를 뜻함(`git log`를 나가려면 `Q`를 누르면됨)

<br>

## 3. 브랜치
`git init`을 하게 되면 `master`라는 브랜치 프로젝트가 버전관리가 시작되는 것인데, `master`라는 하나의 큰 줄기의 브랜치가 생성하게 됨

서비스를 개발할때 각각의 일부의 서비스 기능들을 개발하게 될텐데, 각각의 역할을 맞은 개발자들이 있을 것이다.
이때 브랜치는 독립적으로 어떤 작업을 진행하기 위한 개념으로 필요에 의해 만들어지는 각각의 브랜치는 다른 브랜치의 영향을 받지않기 때문에, 여러 작업을 동시에 진행할 수 있음

또한 이렇게 만들어진 브랜치는 다른 브랜치와 병항(Merge)함으로써, 작업한 내용을 다시 새로운 하나의 브랜치로 모을 수 있음

<br>

### 브랜치 생성
순서 | 구분 | 설명
-- | -- | --
1 | git branch | 프로젝트에 생성된 브랜치 목록을 확인할 수 있음
1 | git branch -a | 프로젝트에 생성된 원격저장소의 브랜치 목록까지 확인할 수 있음
2 | git branch 생성자명 | 프로젝트 내 작성된 생성자명의 브랜치를 생성할 수 있음
3 | git checkout 브랜치명 | 현재 브랜치를 체크아웃하고 입력 브랜치로 전환

<br>

### 브랜치 병합(Pull Request) 커밋하기 (이해를 돕기위한 이미지는 추후 올리겠음)
1. `git add .`를 하여 기존과 동일하게 작성한 모든 파일의 변경사항을 추적하도록 지정
2. `git commit -m '메시지 작성'`을 하여 메시지 내용(-m)과 함께 버전을 생성
3. `git push origin 브랜치명`을 하여 'origin'이란 별칭의 원격 저장소로 버전 내역 전송
4. `github`의 프로젝트 저장소 주소로 들어가 `Pull requests`을 들어간다.
5. `New pull request`을 클릭한다.
6. `Compare changes`의 페이지가 나오면 `base: master < comepare: master`를 확인 할 수있는데 `compare`의 마스터를 커빗하는 브랜치명으로 드롭다운 버튼을 클릭하여 바꾸어 주고 `commit`의 내용을 다시 한번 확인 후, `Create pull request`를 클릭한다.
7. 화면 전환이 되며 `pull`에 대한 메시지를 남긴 후, 다시 `Create pull request`를 누르면 최종적으로 `push`를 완료하게 된다.

<br>

### 용어설명
용어 | 설명
-- | --
Merge | 병합

<br>

## 4. 원격 저장소와 local 저장소의 소스코드를 일치시키는 방법
1. `git fetch --prune origin`을 통해 remote tracking branch (origin/master)를 github 원격 저장소와 일치 시킨다.
2. `git reset hard origin/master --hard`를 통해 방금 전 동기화된 remote tracking branch (origin/master)에 로컬 브랜치를 일치시킨다.
3. 만약 작성중인 코드가 있었지만 필요 없다고 생각하면 `git clean`을 통해 삭제한다.
```
// 순서대로 명령어 입력

git fetch --prune origin
git reset --hard origin/master
git clean
```

<br>

### 용어설명
용어 | 설명
-- | --
git prune | fetching 하기 전, 리모트에 존재하지 않는 리모트 트래킹 브랜치를 삭제하는 명령어
git reset --hard origin/master | origin/master와 일치 시켜주는 명령어
git clean | 작성중인 코드를 `Stash`하지 않고 단순히 그 파일을 삭제하고 싶은 경우에 사용하는 명령어, 추적되고 있지 않은 (Unstage) 경우의 파일이 삭제되는 경우
remote tracking branch | 리모트 브랜치를 `추적하는 레퍼런스`이며 브랜치다. `일종의 북마크` 같은 존재며, `리모트 저장소에 마지막으로 연결했던 순간에 브랜치가 무슨 커밋을 가리키고 있었는지를 나타냄` [[ 참고링크 ](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98)]

<br>

## 5. 프로젝트 복제(Clone)
1. `github 저장소에 접속`하여, 중간에 있는 초록색 `Code` 버튼을 클릭하여 저장소의 url주소를 복사한다.
2. vscode의 터미널을 열어, `change directory`의 줄임말인 `cd`를 입력하여 가지고 있는 `로컬PC에 복제할 프로젝트 위치를 지정`해 준다.
3. 위치를 지정하였으면 '`git clone` `url`'을 입력하여 `github의 저장소에 있는 프로젝트를 위치에 복제`한다.

<br>

### 용어설명
용어 | 설명
-- | --
cd | `change directory`의 줄임말로 디렉토리를 변경하겠다는 말
dir, ls | 현재 터미널의 위치에 있는 폴더의 리스트를 보여줌(윈도우는 `dir`, 맥은 `ls`)
cd.. | 현 파일의 경로로부터 한번 나갈수 있다.

<br>

## 6. git 버전 되돌리기(Reset)
1. 아래의 명령어를 입력하면 이전 `commit`한 버전으로 돌아갈 수 있음, 여기서 `~숫자`의 의미는 현재 가장 최신의 버전으로부터 (숫자)단계 뒤로 되돌아 가겠음을 의미함
```
git reset --hard HEAD~1
```
2. 아래의 명령어를 입력하여, 원상복귀를 하고싶은 경우에는 방금전 상태로 한번은 되돌릴 수 있는데 `git reset --hard ORIG HEAD` 입력하면 된다.
```
git reset --hard ORIG_HEAD
```

<br>

## 7. git 다른 환경에서 시작할 경우
그냥 `github의 저장소`에서 클론을 할 경우 마스터 계정의 저장소 내용을 클론하게 되는데, `마스터가 아닌 저장소 내 다른 브랜치를 가져올 겅우` 4번부터 따라하시면 됨

<br>

### 클론하는 방법
1. `github 저장소에 접속`하여, 중간에 있는 초록색 `Code` 버튼을 클릭하여 저장소의 url주소를 복사한다.
2. vscode의 터미널을 열어, `change directory`의 줄임말인 `cd`를 입력하여 가지고 있는 `로컬PC에 복제할 프로젝트 위치를 지정`해 준다.
3. 위치를 지정하였으면 '`git clone` `url`'을 입력하여 `github의 저장소에 있는 프로젝트를 위치에 복제`한다.
```
git clone url
```
4. 만일 마스터 브랜치의 코드가 필요한 것이라면 여기서 끝이지만, 그게 아닌 `다른 브런치의 저장소를 원하는 경우`라면 아래와 같이 입력하면 저장소의 정보를 가져와 브랜치 정보를 가져옴
```
git checkout -t origin/브랜치명
```

<br>

### 추가설명
1. 만약에 브랜치 정보를 잘 못 가져와서 지워야 되는 경우가 있다면, 현재 브랜치에서 현재 브랜치를 지울 수 없으니 `git checkout master`로 이동하여, `git branch -d 브랜치명`을 입력하면 삭제가 됨
```
git branch -d 브랜치명
```
2. 만약 저장소 내 입력한 브랜치를 생성하여, 바로 생성된 브랜치로 이동하고 싶은 경우에는 아래와 같이 작성하면 됨.(하지만 권한에 대해 인증이 되지 않은 브랜치이기 때문에, 마스터 계정의 아이디로 인증에 대한 절차를 진행해야 하는 경우가 있음)
```
git checkout -b 브랜치명
```

<br>

### 용어설명
용어 | 설명
-- | --
git branch -r | 현 저장소 내 구성된 브랜치 목록을 확인
git checkout -t origin/브랜치명 | 현 저장소 내 구성의 브랜치의 정보를 가져와 체크아웃함
git checkout -b 브랜치명 | 저장소 내 입력한 브랜치를 생성하여, 생성된 브랜치로 이동함, 이 경우 생성된 브랜치기 때문에 권한에 대한 인증을 받을 경우가 있음
git branch -d 브랜치명 | 해당 브랜치를 삭제함

<br>

## 8. 충돌(Conflict), 로컬 병합(Merge)
`github 원격 저장소의 코드`와 `현재 작업한 코드의 내용`을 믹스하여, 커밋을 하고싶은 경우
```
git pull origin master
```
위처럼 입력하면 충돌에 대한 내용을 확인할 수 있는데, `살리고 싶은 내용을 확인후 충돌에 대한 다른 부분을 삭제해 주거나 또는 아예 새롭게 작성`해주면 된다. (이때 `vscode 같은 애디터`를 사용할 경우 `충돌에 대한 코드 위쪽`에 `현재변경사항수락, 수신변경사항수락, 두변경사항모두수락, 변경사항비교`등의 보기를 주어 손쉽게 해결할 수 있게 도와줌)
<br>
위와 같은 내용을 조치 후 다시 commit을 진행하면 정상적으로 충돌없이 저장소에 업데이트를 할 수 있다
```
git add .
git status
git commit -m ''
git push origin master
```

<br>

### 용어설명
용어 | 설명
-- | --
push | 로컬의 내용을 원격저장소로 밀어내는 것이고
pull | 원격저장소의 내용을 로컬로 당겨오는 것

<br>

## #. Netlify 배포
[[ Netlfiy ] ](https://www.netlify.com)
`GitHub의 원경 저장소`와 `Netlfiy`연결해 주면 업로드 한 저장소의 프로젝트를 가져와 자동으로 사이트를 만들어 줌

한번 연결을 진행하면, 프로젝트 진행시, `git`에 `commit 후 push`를 하여 변동사항이 생기면 `Netlify`에서 자동으로 변동사항을 체크하여 업데이트를 하게되어 `지속적인 배보`가 가능

<br>

### Netlity 사용 방법
1. `Netlify`에게 GitHub의 저장소에서 연결할 수 있게 `권한을 부여`해주면, `All repositories와 Only select repositories`로 나뉘어 `GitHub의 내 계정에 있는 모든 저장소`를 `Netlify`에게 오픈할 것인지 아닌지를 묻고 있는 창이 출력된다. 이때 자기의 생각에 맞는 버튼을 클릭하고 `Install`을 누르면, GitHub의 계정 비밀번호를 입력 후 설치가 완료된다. <br>
![스크린샷 2022-01-09 오전 3 01 32](https://user-images.githubusercontent.com/80088956/148655026-da2068ba-d62e-4d5f-bb39-f3409964055f.png)

2. 앞의 과정을 거친 후 `Create a new site` 라는 알랍창의 3개의 단계를 거치면 되는데, 저는 GitHub로 작업하여 `GitHub` 를 클릭해주었습니다.
- 스크린샷을 미리 뜨지 못해 'Import an existing project from a Git repository' 나와 있는 것임
<img width="1265" alt="스크린샷 2022-01-09 오전 3 05 34" src="https://user-images.githubusercontent.com/80088956/148654797-b9c150d3-5f80-40f1-89bf-118672733b50.png">

3. `GitHub`에 있는 모든 저장소가 목록으로 출력되고 사이트로 만들 저장소를 클릭합니다.
<img width="768" alt="스크린샷 2022-01-09 오전 3 08 34" src="https://user-images.githubusercontent.com/80088956/148654901-7dba9452-4d37-4248-84d8-8bec5b8fa301.png">

4. 기본적인 배포에 대한 정보들을 입력합니다.
<img width="986" alt="스크린샷 2022-01-09 오전 3 09 13" src="https://user-images.githubusercontent.com/80088956/148654919-9ae8ba69-2265-45b7-b10b-c058bd7b6eec.png">

5. 그럼 곧 장 임의의 주소가 만들어져 사이트에 접속이 가능해집니다. (본인이 원한다면 도메인을 구입하여, 주소를 변경할 수 있음)
![스크린샷 2022-01-09 오전 3 16 20](https://user-images.githubusercontent.com/80088956/148655126-6012d40c-b141-46e5-ac17-40e3c0c0605b.png)
