import {useState} from 'react';
import {SecStyle, ToHome} from './style';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {faCaretLeft, faCaretDown, faCaretRight, faCaretUp, faCircleChevronRight, faCircleChevronLeft, faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// import SingleSheet from './SingleSheet';

const ToAbout = styled.li`
position:absolute; left:40px; top:40px;
  width:50px;
  text-align:center;
  transform:rotate(45deg);

  & .btntext{
    left:0; top:-20px;
    transform:rotate(-45deg);
  }
`;

const ToIllust = styled.li`
  position:absolute; left:50%; top:40px;
  transform:translateX(-50%);
  width:50px; text-align:center;

  & .btntext{
    left:50%; top:0px;
    transform:translateX(-50%);
    
  }
`
const ToContact = styled.li`
  position:absolute; right:40px; top:50%;
  transform:translateY(-50%);
  width:50px;
  text-align:center;
  
  & .btntext{
    right:0; top:0px;
  }
`;
const SheetsWrap = styled.div`
  position:absolute; left:0; top:0;
  width:100%; height:768px;
  background:rgba(0,0,0,0.8);

  & .sheet{
    position:absolute; left:50%; top:50%;
    transform:translate(-50%,-50%);
    width:800px;  height:auto;
    
  }
  & img{
    width:100%; height:auto;
  }
  & .btn_prev, .btn_next{
    position:absolute; top:50%;
    transform:translateY(-50%);
    width:50px; height:50px;
    background:transparent;
    opacity:0.8;
  }
  & .btn_prev:hover, .btn_next:hover{
    opacity:1;
  }
  & .btn_prev{
    left:100px;
  }
  & .btn_next{
    right:100px;
  }
  & .btn_close{
    position:absolute; right:100px; top:100px;
    width:50px; height:50px; background:transparent;
  }
`



function Sheets(){

  //컨셉아트 목록 토글 상태변수
  const [showSheets, setShowSheets] = useState(false);

  //이미지 순서 번호 변수
  const [imgIndex, setImgIndex] = useState(0);
  
  //컨셉아트 목록
  const sheetImages = [
  { 'src':'/img/conceptSheet1.jpg','alt':'고양이 캐릭터 사라 컨셉아트' },
  { 'src':'/img/conceptSheet2.jpg','alt':'고양이 캐릭터 마우 컨셉아트' },
  { 'src':'/img/conceptSheet3.jpg','alt':'고양이 캐릭터 바스테트 컨셉아트' },
  { 'src':'/img/conceptSheet4.jpg','alt':'바스테트 목걸이 컨셉아트' },
  { 'src':'/img/conceptSheet5.jpg','alt':'개미 캐릭터 아니 컨셉아트' },
  { 'src':'/img/conceptSheet6.jpg','alt':'개미 캐릭터 앤디 컨셉아트' },
  { 'src':'/img/conceptSheet7.jpg','alt':'용 캐릭터 미리 컨셉아트' }
];


  const [buttonColors, setButtonColors] = useState(Array.from({ length: sheetImages.length }, (_, index) => index === 0 ? 'gold' : ''));

  //인덱스 버튼
  const sheetBtns = [
    {name:'버튼1' },
    {name:'버튼2' },
    {name:'버튼3' },
    {name:'버튼4' },
    {name:'버튼5' },
    {name:'버튼6' },
    {name:'버튼7' }
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
    const updatedColors = buttonColors.map((_, index) => index === selectedIndex ? 'gold' : '');
    setButtonColors(updatedColors);
  };

  console.log(sheetBtns);
  
  return(
      <SecStyle>
        <h2>Sheets</h2>
        <div className="wrapper">
          <img className="background" src="img/sheets.jpg" alt="컨셉시트 작업물 페이지 배경" />
          <nav>
            <h3>site map</h3>
            <ul>
              <ToHome><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff" /> <span className="btntext toIllust">홈</span></Link></ToHome>
              <ToAbout><Link to="/about"><FontAwesomeIcon icon={faCaretLeft} size="4x" color="#ddc2ff" /><span className="btntext toIllust">프로필</span></Link></ToAbout>
              <ToIllust><Link to="/illusts"><FontAwesomeIcon icon={faCaretUp} size="4x" color="#ddc2ff"/><span className="btntext toIllust">일러스트</span></Link ></ToIllust>
              <ToContact><Link to="/contact"><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff" /><span className="btntext toIllust">SNS</span></Link></ToContact>
            </ul>
          </nav>
          <button onClick={()=>{ setShowSheets(true);}} className="toggleList">
            <img src="img/sheetbtn.png" alt="컨셉시트 열람 버튼"   />
          </button>
          
          
          {showSheets ? (
            <SheetsWrap>
              <div className="sheet">
                <img src={sheetImages[imgIndex].src} alt={sheetImages[imgIndex].alt} />
              </div>
              
              <div className="controlor">
                <button className="btn_prev" onClick={prevImg}><FontAwesomeIcon icon={faCircleChevronLeft} size="3x" color="#fff" /></button>
                <button className="btn_next" onClick={nextImg}><FontAwesomeIcon icon={faCircleChevronRight} size="3x" color="#fff" /></button>
              </div>

            <div className="index_btns">
            {sheetBtns.map((button, index) => (
          <button key={index} style={{ backgroundColor: buttonColors[index] }} onClick={() => { setImgIndex(index); updateButtonColor(index); }}>
            {button.name}
          </button>
        ))}   
            </div>
            <button className="btn_close" onClick={()=>{setShowSheets(false)}}><FontAwesomeIcon icon={faXmark} size="3x" color="#fff" /></button>

          </SheetsWrap>) : null};
          
        </div>
        
      </SecStyle>
  );
}

export default Sheets;