import {useState} from 'react';
import {SecStyle, ToHome, PuzzleWrap} from './style';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {faCircleRight, faCaretLeft, faCaretDown, faCaretUp, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ToAbout = styled.li`
  width:50px;
  text-align:center;
  position:absolute; left:30px; top:45%;
  
  & .btntext{
    left:0; top:0;
  }
`;

const ToSheet = styled.li`
  width:50px;
  text-align:center;
  position:absolute; left:50px; bottom:40px;
  transform:rotate(-45deg);
  & .btntext{
    left:0; top:20px;
    transform:rotate(45deg);
  }
`

const ToContact = styled.li`
  position:absolute; right:50px; bottom:40px;
  width:50px; transform:rotate(45deg);
  text-align:center;
  & .btntext{
    right:0; top:20px;
    transform:rotate(-45deg);
  }
`;
function Illusts(){
  const [illustNum, setIllustNum] = useState(0);
  const [isShow, setIsShow] = useState(false);

  //일러스트 목록
  const illustImages = [
    { 'src':'/img/illust1.jpg', 'alt':'고양이가 피라미드 꼭대기에서 아래를 내다보는 그림', 'height':'500px' },
    { 'src':'/img/illust2.jpg', 'alt':'나무들이 빽빽하게 있는 우주', 'height':'500px' },
    { 'src':'/img/illust3.jpg', 'alt':'뿔이 솟은 행성과 조우한 고양이', 'height':'500px' },
    { 'src':'/img/illust4.jpg', 'alt':'사라의 꿈 표지 일러스트', 'height':'600px' },
    { 'src':'/img/illust5.png', 'alt':'우주 배경 일러스트','height':'350px' },
    { 'src':'/img/illust6.jpg', 'alt':'용 캐릭터 미리 전신 일러스트', 'height':'600px' },
  ]
  return(

      <SecStyle>
        <h2>illusts</h2>
        <div className="wrapper">
          <img className="background" src="img/illusts.jpg" alt="작업물 창 배경그림" />
          <nav>
            <ul>
              <ToHome><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff" /><span className="btntext toSheet">홈</span></Link></ToHome>
              <ToAbout><Link to="/about"><FontAwesomeIcon icon={faCaretLeft} size="4x" color="#ddc2ff" /><span className="btntext toSheet">프로필</span></Link></ToAbout>
              <ToSheet><Link to="/sheets"><FontAwesomeIcon icon={faCaretLeft} size="4x" color="#ddc2ff" /><span className="btntext toSheet">컨셉아트</span></Link></ToSheet>
              <ToContact><Link to="/contact"><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff" /><span className="btntext toSheet">SNS</span></Link></ToContact>
            </ul>
          </nav>
          
          {/* <img className="artbook" src="img/artbook.png" alt="포트폴리오 목록"  /> */}

          <div className="btns_wrap">
            <button className="frame1" onClick={()=>{
              setIllustNum(0);
              setIsShow(true);
              
            }} ><img src='img/illustBtn1.png' alt="일러스트 열람 버튼1" /> </button>
            <button className="frame2" onClick={()=>{
              setIllustNum(1);
              setIsShow(true);
            }} ><img src='img/illustBtn2.png' alt="일러스트 열람 버튼2" /> </button>
            <button className="frame3" onClick={()=>{
              setIllustNum(2);
              setIsShow(true);
            }} ><img src='img/illustBtn3.png' alt="일러스트 열람 버튼3" /> </button>
            <button className="frame4" onClick={()=>{
              setIllustNum(3);
              setIsShow(true);

            }} ><img src='img/illustBtn4.png' alt="일러스트 열람 버튼4" /> </button>
            <button className="frame5" onClick={()=>{
              setIllustNum(4);
              setIsShow(true);

            }} ><img src='img/illustBtn5.png' alt="일러스트 열람 버튼5" /> </button>
            <button className="frame6" onClick={()=>{
              setIllustNum(5);
              setIsShow(true);

            }} ><img src='img/illustBtn6.png' alt="일러스트 열람 버튼6" /> </button>
          </div>
          
          {isShow ? (<div className="mainFrame">
            <img src={illustImages[illustNum].src} alt={illustImages[illustNum].alt} style={{'height' : illustImages[illustNum].height}} onClick={()=>{setIsShow(false);}} />
          </div>) : null }
          
          
          {/* <PuzzleWrap>
            <ul>
              <li><img src="img/piece1.png" alt="dkjhfk" /></li>
              <li><img src="img/piece1.png" alt="dkjhfk" /></li>
              <li><img src="img/piece1.png" alt="dkjhfk" /></li>
              <li><img src="img/piece1.png" alt="dkjhfk" /></li>
            </ul>
          </PuzzleWrap> */}
          
        </div>
      </SecStyle>
  );
}

export default Illusts;