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
[[ Netlfiy : 사이트 이동 ] ](https://www.netlify.com) 를 통해 GitHub의 원경 저장소와 연결해 주면 업로드 한 저장소의 프로젝트를 가져와 자동으로 사이트를 만들어 줌

한번 연결을 진행하였으면 git에 커밋을 하면 변동사항을 Netlify에서 자동으로 가져가 반영함