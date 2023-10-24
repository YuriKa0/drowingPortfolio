import {useState} from 'react';
import {SecStyle, PuzzleWrap} from './style';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {faCircleRight, faCaretLeft, faCaretDown, faCaretUp, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const ToAbout = styled.li`
  width:50px;
  text-align:center;
  position:absolute; left:30px; top:45%;
  background:#05f;
`;
const ToHome = styled.li`
  position:absolute; left:50%; bottom:30px;
  transform:translateX(-60%);
  width:50px;
  text-align:center;
  background:#05f;
`;
const ToContact = styled.li`
  position:absolute; right:180px; bottom:30px;
  width:50px; rotate:45deg;
  text-align:center;
  background:#05f;
`;
const SheetsWrap = styled.div`
  position:absolute; left:0; top:0;
  width:100%; height:100%;
  background:#333;
  & ul{
    position:absolute; left:50%; top:50%;
    transform:translate(-50%,-50%);
    width:900px;  height:620px;
    /* height:768px; */
  }
  & li{
    position:absolute; left:0; top:0;
    display:none;
  }
  & li:first-child{
    display:block;
  }

  & button{
    position:absolute; top:50%;
    transform:translateY(-50%);
    width:50px; height:50px;
    cursor:pointer;
  }
  & .btn_prev{
    left:100px;
  }
  & .btn_next{
    right:100px;
  }

`
function Sheets(){
  const [sheets, setSheets] = useState(false);

  const btnPrev = document.querySelector('.btn_prev');
  const btnNext = document.querySelector('.btn_next');

  const conceptSheets = document.querySelectorAll('.sheets_lists li');
  
  conceptSheets.forEach((conceptSheet)=>{
    let n = 0;
    
    btnPrev.addEventListener('click',()=>{
      n--;
      // if(n <= -1){
      //   n = conceptSheet.length;
      // }
      conceptSheet.style.display = 'none';
      conceptSheets[n].style.display = 'block';
    })
    btnNext.addEventListener('click',()=>{
      // console.log(conceptSheets.length);
      // if(n = conceptSheets.length){
      //   n = 0;
      // }
      n++;
      conceptSheet.style.display = 'none';
      conceptSheets[n].style.display = 'block';
      
    });
  });

  

  return(
      <SecStyle>
        <h2>Sheets</h2>
        <div className="wrapper">
          <img className="background" src="img/sheets.jpg" alt="컨셉시트 작업물 페이지" />
          <nav>
            <h3>site map</h3>
            <ul>
              <ToHome><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff" /> 메인화면</Link></ToHome>
              <ToAbout><Link to="/about"><FontAwesomeIcon icon={faCaretLeft} size="4x" color="#ddc2ff" />프로필</Link></ToAbout>
              <ToContact><Link to="/contact"><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff" />연락처</Link></ToContact>
            </ul>
          </nav>
          
          <img className="artbook" src="img/artbook.png" alt="컨셉시트 목록" onClick={()=>{
            setSheets(true);
          }}  />

          <SheetsWrap>
            <ul className="sheets_lists">
              <li><img src="img/conceptSheet1.jpg" alt="사라 컨셉아트" /></li>
              <li><img src="img/conceptSheet2.jpg" alt="마우 컨셉아트" /></li>
              <li><img src="img/conceptSheet3.jpg" alt="바스테트 컨셉아트" /></li>
              <li><img src="img/conceptSheet4.jpg" alt="아니 컨셉아트" /></li>
              <li><img src="img/conceptSheet5.jpg" alt="앤디 컨셉아트" /></li>
              <li><img src="img/conceptSheet6.jpg" alt="미리 컨셉아트" /></li>
            </ul>
            <div className="controlor">
              <button className="btn_prev">이전</button>
              <button className="btn_next">다음</button>
            </div>
            <div className="pagination">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </SheetsWrap>
        </div>
      </SecStyle>
  );
}

export default Sheets;