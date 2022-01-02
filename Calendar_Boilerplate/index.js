// 1. 간략화된 달력 만들기
const now = new Date();
// 위의 Date는
// Date 함수로 호출할 경우 new Date().toString()과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환
// new Date() 생성자로 호출할 경우 새로운 Date 객체를 반환

const today = {
  year_sp: now.getFullYear(),
  date_sp: now.getDate(),
  month_sp: now.toLocaleString('en-US', {month: 'short'}), // stort:약식, long:풀네임
  day_sp: now.toLocaleString('en-US', {weekday: 'short'})  // 첫번째 인자를 'en-US(미국)'이 아닌 'ko-KR'로하면 한국 포맷으로 표출
}
// 반복문을 사용하여 돌려주는것도 좋은 방법이 였군
for (let key in today) {
  document.getElementById(key).textContent = today[key];
}
// document.getElementById('year_sp').textContent = today.year_sp;
// document.getElementById('month_sp').textContent = today.month_sp;
// document.getElementById('date_sp').textContent = today.date_sp;
// document.getElementById('day_sp').textContent = today.day_sp;


// 2. 실시간 넣어보기
const $tictic = document.querySelector('.tictic');

function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    // clock.innerHTML = hour +":" + minutes + ":"+seconds;
    // 위의 내용으로 구현할 경우 00:0:0의 식으로 출력된다 그래서 아래와 같이 삼항연산자와 백틱을 이용하여 변경시킴
    $tictic.innerHTML = `${hour < 10 ? `0${hour}`:hour}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
}

function comeon(){
    setInterval(getTime, 1000); // setInterval(실행함수, 몇초간격?(1초=1000밀리초))
}
comeon();

let kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
let todayTime = new Date(kstGap); // 한국 시간으로 date 객체 만들기(오늘)

// 달력에서 표기하는 날자 객체
let yearMonth = new Date(todayTime.getFullYear(), todayTime.getMonth(), todayTime.getDate());

// 3. 켈린더 만들기
renderCalender(yearMonth);

function renderCalender(yearMonth) {
  console.log(yearMonth);
  // 위의 것과 다르게 생각대로 만들어지지 않아서 개발자 친구에게 조언을 구해보았음
  // "1. 간략화된 달력 만들기"에서 선언한 now를 사용하여 달력 상단에 표기할 년도,월,일의 정보를 표현해줌
  const viewYear = now.getFullYear(); // 년
  const viewMonth = now.getMonth(); // 월
  const viewDate = now.getDate(); // 일

  // 현재 년월 표기를 넣어줌
  document.querySelector('.year-month').textContent = `${viewYear}th ${viewMonth + 1}`;

  // 나는 개발을 전공하지 않아 검색해보니 많은 소스들이 있어서 읽어보면서 이렇게 하면 되겠구나 하고 학습을 진행함

  // 이전 달의 마지막 날 날짜 요일 체크
  const preDay = new Date(viewYear,viewMonth, 0);
  const prevDate = preDay.getDate();
  const prevDay = preDay.getDay();

  // 그리고 구하기로 했던 이번달의 년월의 일과 요일을 선언해줌, 각 달의 마지막 일을 배열로 만들어줌
  const thisDate = new Date(viewYear,viewMonth+1, 0); //이번달의 년월의 일(시작일)과
  const theDate = thisDate.getDate(); // 요일을 선언
  const theDay = thisDate.getDay(); // 요일을 선언

  // 렌더링 html 요소 생성
  calendar = document.querySelector('.dates')
  calendar.innerHTML = '';

  // 지난달
  for (let i = prevDate - prevDay; i <= prevDate; i++) {
    calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>'
  }
  // 이번달
  for (let i = 1; i <= theDate; i++) {
    calendar.innerHTML = calendar.innerHTML + '<div class="day current">' + i + '</div>'
  }
  // 다음달
  for (let i = 1; i <= (7 - theDay == 7 ? 0 : 7 - theDay - 1); i++) {
    calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>'
  }

  // 달력안에 오늘 날짜 색깔 표기
  if (todayTime.getMonth() == viewMonth) {
    todayTimeDate = todayTime.getDate();
    let viewMonthDate = document.querySelectorAll('.dates .current');
    viewMonthDate[todayTimeDate -1].classList.add('todayTime');
  }
  // // 전환버튼 넣어주기
  // // 공부했던 에드이벤트리스너 클릭으로 해결해보려고 함
  // // 일단 안되네 ㅎㅎ 화난다 > 일단 강의 처음부터 다시 듣고와야겠음 그리고 다시
  const prevButton = document.querySelector('.go-prev');
  const nextButton = document.querySelector('.go-next');

  prevButton.addEventListener('click', function () {
    // rederCalender(yearMonth.remove());
    // prevButton = document.querySelector('.day prev disable');
    // prevButton();
    let yearMonth = new Date(viewYear, viewMonth - 1, 1);
    // calendar.innerHTML = calendar.innerHTML(renderCalender(yearMonth));
    renderCalender(yearMonth);
  });

  nextButton.addEventListener('click', function () {
    // rederCalender(yearMonth.remove());
    // nextButton = document.querySelector('.day next disable');
    // nextButton();
    let yearMonth = new Date(viewYear, viewMonth + 1, 1);
    // calendar.innerHTML = calendar.innerHTML(renderCalender(yearMonth));
    renderCalender(yearMonth);
  });
}


// const goPrev = function () {
//   yearMonth = new Date(viewYear, viewMonth - 1, 1);
//   return renderCalender();
// };

// const goNext = function () {
//   yearMonth = new Date(viewYear, viewMonth + 1, 1);
//   return renderCalender();
// };



// -------------------------------- 이전 소스(남이 만든 달력이동 + 내꺼 정보 넣어보기 참고용_3) --------------------------------
// 재이커리?는 내가 배운적이 없지만 선언방식 차이 인걸 확인함

// // 이전달로 이동
// $('.go-prev').on('click', function() {
// yearMonth = new Date(viewYear, viewMonth - 1, 1);
// renderCalender(yearMonth);
// });

// // 다음달로 이동
// $('.go-next').on('click', function() {
// yearMonth = new Date(viewYear, viewMonth + 1, 1);
// renderCalender(yearMonth);
// });



// -------------------------------- 이전 소스(남거 + 내꺼 같이 사용 해봄 참고용_2) --------------------------------
// const last = [31,28,31,31,30,31,30,31,31,30,31,30,31] //각 달의 마지막 일을 배열

// // 4년마다 윤달이 있으니까 체크
// // 나같은 개린이 이해를 위해 설명하자면 4년마다 윤달(2/29)이 존재하니 하는 식임
// // 여기서 한번 더 말하자면 != / !== 의 차이점은 앞에꺼는 '같다/ 같지않다' 라면 !==는 엄격한 비교로 엄격하게 변수타입까지 고려한다는 것
// if (viewYear%4 && viewYear%100 != 0 || viewYear%400 === 0) {
//   lastDate = last[1] = 29;
// }

// // 현재 달의 마지막 일
// let lastDate = last[viewMonth];

// // 달력에 필요한 행의 개수 만든다
// // theDay(빈 칸의수), lastDate(월의 전체 일수)
// const row = Math.ceil((theDay + lastDate)/7);

// // 그리고 우선 캘린터에 표기되는 일의 값을 아래처럼 작성하여 초기화
// let calendel = "";
// let viewDayNum = 1;

// for (let i=1; i<=row; i++){ // 행 만들기
//   calendel += "<tr>";
//   for (let k=1; k<=7; k++){ // 열 만들기
//     if(i===1 && k<=theDay || viewDayNum > lastDate) {
//       calendel += "<td> &nbsp; </td>"; //공백이란 뜻
//     } else {
//       let tdClass = "";
//       if(viewDayNum == viewDay)
//       tdClass = "today";
//       else
//       tdClass = "";
//       if(k == 1)
//       tdClass =+ "sun";
//       calendel += "<td class='" + tdClass + "'>"
//       + "<strong class='date'>" + viewDayNum + "</strong>"
//       + "</td>";
//       viewDayNum++;
//     }
//   }
//   calendel +="</tr>";
// }

// $("#calendel").append(calendel);



// -------------------------------- 이전 소스(남거 참고용_1 내 생각도 들어감) --------------------------------

// let $calendelBody = document.querySelector('#calendelBody')
// $calendelBody.append(calendel);
// $calendelBody.append(document.write(calendel));


// // 지난 달 마지막 날짜와 요일, 이번달 마지막 날짜와 요일
// const prevLast = new Date(viewYear, viewMonth, 0);
// const thisLast = new Date(viewYear, viewMonth + 1, 0);

// // 지난달 마지막 날짜(PLDate)와 요일(PLDay)
// const PLDate = prevLast.getDate();
// const PLDay = prevLast.getDay();

// // 이번 달 마지막 날짜(TLDate)와 요일(TLDay)
// const TLDate = thisLast.getDate();
// const TLDay = thisLast.getDay();

// // 지난달, 현재, 다음달
// const prevDates = [];
// const thisDates = [...Array(TLDate + 1).keys()].slice(1);
// const nextDates = [];

// // 내거로 만들기
// // 1. Array(n)으로 배열을 만들면 길이가 n인 배열이 생성 (이때 모든 요소들은 undefined)
// // 2. 그런데 모든 요소들이 empty 값이기 때문에 keys() 메서드를 활용하면 0부터 n - 1까지의 Array Iterator가 생성되는데,
// // 3. 전개 구문을 통해서 이 Array Iterator를 배열로 만들어 내면 0부터 n-1까지의 배열을 얻어낼 수가 있음
// // 4. 그래서 이번 달 마지막 날짜 + 1을 n에 전달해주고
// // 5. 제일 앞에 있는 0을 없애기 위해서 slice 메서드를 활용
// // prevDates와, nextDates 채우기
// if (PLDay !== 3) {
//   for (let i = 0; i < PLDay + 1; i++) {
//     prevDates.unshift(PLDate - i);
//   }
// }
// for (let i = 1; i < 14 - TLDay; i++) { // 찍어서 눌러보니 14가 맞는데 왜 14인지 모르겠다. 남이 짠거를 봐서 그런것 같다 그래도 설명을 듣고싶은데 ..ㅠㅠ
//   nextDates.push(i);
// }
// //html에 넣기
// const dates = prevDates.concat(thisDates, nextDates); // concat으로 세 배열을 합친 다음

// dates.forEach((date, i) => { //forEach로 전체 요소들을 돌고
//   dates[i] = `<div class="date">${date}</div>`;
// })
// document.querySelector('.dates').innerHTML = dates.join('');
