// console.log("hello, vanilla.");

// 1. 간략화된 달력 만들기
const now = new Date();

const today = {
  year: now.getFullYear(),
  date: now.getDate(),
  month: now.toLocaleString('en-US', {month: 'short'}), // stort:약식, long:풀네임
  day: now.toLocaleString('en-US', {weekday: 'short'})  // 첫번째 인자를 'en-US(미국)'이 아닌 'ko-KR'로하면 한국 포맷으로 표출
}
// 반복문을 사용하여 돌려주는것도 좋은 방법이 였군
for (let key in today) {
  document.getElementById(key).textContent = today[key];
}
// document.getElementById('year').textContent = today.year;
// document.getElementById('month').textContent = today.month;
// document.getElementById('date').textContent = today.date;
// document.getElementById('day').textContent = today.day;