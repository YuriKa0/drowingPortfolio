//TodoHead.js
import {HeadStyle} from './style'

function TodoHead() {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dt = new Date();
  let year = dt.getFullYear();
  let month = dt.getMonth();
  let date = dt.getDate();
  let day = days[dt.getDay()];
  console.log(year);
  return (
    <HeadStyle>
      <h2>오늘의 할 일</h2>
      <p><span>{year}</span>년 <span>{month}</span>월 <span>{date}</span>일 (<span>{day}</span>)</p>
    </HeadStyle>
  );
}

export default TodoHead;