# Git
## 1. 버전 생성과 업로드의 이해
해당 표의 내용을 순서대로 따라하면 git에 버전 생성 및 커밋을 할 수 있음

순서 | 구분 | 설명 | 비고
-- | -- | -- | --
1 | $ git init | 현재 프로젝트에서 변경사항 추적(버전관리)을 시작 |
2 | $ git add index.html | 변경사항을 추적할 특정 파일(index.html)을 지정 |
2 | $ git add . | 모든 파일의 변경사항을 추적하도록 지정 | 변경 사항이 있을 때마다
3 | $ git commit -m '메시지 작성 공간' | 메시지(-m)와 함께 버전을 생성 | 변경사항이 있으면 2번 add 후 다시 3번 commit
4 | GitHub (remote, 원격) | GitHub를 통하여 원격저장소를 만든다. |
5 | $ git remote add origin ~ | origin이란 별칭으로 원격 저장소를 연결 | ~ 부분에 GitHub 저장소의 URL 입력
6 | # git push origin master | origin이란 별칭의 원격 저장소로 버전 내역 전송 |

## 2. Netlify 배포
[[ Netlfiy ] ](https://www.netlify.com)
`GitHub의 원경 저장소`와 `Netlfiy`연결해 주면 업로드 한 저장소의 프로젝트를 가져와 자동으로 사이트를 만들어 줌

한번 연결을 진행하면, 프로젝트 진행시, `git`에 `commit 후 push`를 하여 변동사항이 생기면 `Netlify`에서 자동으로 변동사항을 체크하여 업데이트를 하게되어 `지속적인 배보`가 가능

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
