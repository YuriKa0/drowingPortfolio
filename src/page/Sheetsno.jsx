import {useState} from 'react';
import {SecStyle} from './style';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {faCaretLeft, faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// import SingleSheet from './SingleSheet';

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
  background:#09c;
  & .sheet{
    position:absolute; left:50%; top:50%;
    transform:translate(-50%,-50%);
    width:900px;  height:auto;
    /* height:768px; */
  }
  & li{
    position:absolute; left:0; top:0;
    display:none;
  }
  & li:first-child{
    display:block;
  }
  & img{
    width:100%; height:auto;
  }
  & .btn_prev, .btn_next{
    position:absolute; top:50%;
    transform:translateY(-50%);
    width:50px; height:50px;
  }
  & .btn_prev{
    left:100px;
  }
  & .btn_next{
    right:100px;
  }
  & .btn_close{
    position:absolute; right:100px; top:100px;
    width:50px; height:50px;
  }
  $ .numbtn{
    width:50px; height:50px;
  }

`



function Sheets(){
  // const [isSelected, setIsSelected ] = useState(false);
  const [sheets, setSheets] = useState([]);
  // const [bgColor, setBgColor] = useState('');
  const [imgIndex, setImgIndex] = useState(0);
  

  const sheetImages = [
  { 'src':'/img/conceptSheet1.jpg','alt':'고양이 캐릭터 사라 컨셉아트', 'selected' : false },
  { 'src':'/img/conceptSheet2.jpg','alt':'고양이 캐릭터 마우 컨셉아트', 'selected' : false },
  { 'src':'/img/conceptSheet3.jpg','alt':'고양이 캐릭터 바스테트 컨셉아트', 'selected' : false },
  { 'src':'/img/conceptSheet4.jpg','alt':'개미 캐릭터 아니 컨셉아트', 'selected' : false },
  { 'src':'/img/conceptSheet5.jpg','alt':'개미 캐릭터 앤디 컨셉아트', 'selected' : false },
  { 'src':'/img/conceptSheet6.jpg','alt':'용 캐릭터 미리 컨셉아트', 'selected' : false }
];

  const [buttonColors, setButtonColors] = useState(Array.from({ length: sheetImages.length }, (_, index) => index === 0 ? 'gold' : ''));
  const sheetBtns = [
    {name:'버튼1' },
    {name:'버튼2' },
    {name:'버튼3' },
    {name:'버튼4' },
    {name:'버튼5' },
    {name:'버튼6' }
  ]
  const nextImg = () => {
    const nextIndex = (imgIndex + 1) % sheetImages.length;
    setImgIndex(nextIndex);
    updateButtonColor(nextIndex);
  };

  const prevImg = () => {
    const prevIndex = (imgIndex - 1 + sheetImages.length) % sheetImages.length;
    setImgIndex(prevIndex);
    updateButtonColor(prevIndex);
  };

  const updateButtonColor = (selectedIndex) => {
    const updatedColors = buttonColors.map((color, index) => index === selectedIndex ? 'gold' : '');
    setButtonColors(updatedColors);
  };

  console.log(sheetBtns);
  
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
          
          {sheets ? (
            <SheetsWrap>
              <div className="sheet">
                <img src={sheetImages[imgIndex].src} alt={sheetImages[imgIndex].alt} />
              </div>
              
              <div className="controlor">
                <button className="btn_prev" onClick={prevImg}>이전</button>
                <button className="btn_next" onClick={nextImg}>다음</button>
              </div>
            <div className="index_btns">
            {sheetBtns.map((button, index) => (
          <button key={button.id} style={{ backgroundColor: buttonColors[index] }} onClick={() => { setImgIndex(index); updateButtonColor(index); }}>
            {button.name}
          </button>
        ))}   
            </div>
            <button className="btn_close" onClick={()=>{setSheets(false)}}>닫기</button>

          </SheetsWrap>) : null};
          
        </div>
        
      </SecStyle>
  );
}

export default Sheets;