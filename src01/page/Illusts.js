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
function Illusts(){
  const [illust1, setillust1] = useState(false);
  const [illust2, setillust2] = useState(false);
  return(

      <SecStyle>
        <h2>illusts</h2>
        <div className="wrapper">
          <img className="background" src="img/illusts.jpg" alt="작업물 창 배경그림" />
          <nav>
            <ul>
              <ToHome><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff" /></Link></ToHome>
              <ToAbout><Link to="/about"><FontAwesomeIcon icon={faCaretLeft} size="4x" color="#ddc2ff" /></Link></ToAbout>
              <ToContact><Link to="/contact"><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff" /></Link></ToContact>
            </ul>
          </nav>
          
          {/* <img className="artbook" src="img/artbook.png" alt="포트폴리오 목록"  /> */}

          <img className="frame1" src="img/frame1.png" alt="작업물1" onClick={()=>{ setillust1(true)}} />
          <img className="frame2" src="img/frame2.png" alt="작업물2" onClick={()=>{ setillust2(true)}} />
          { illust1 ? (<img className="illust1" src="img/illust1.jpg" alt="사막의 고양이 일러스트" onClick={()=>{setillust1(false)}} />) : null}
          { illust2 ? (
          <img className="illust2" src="img/illust2.jpg" alt="미리 전신 일러스트" onClick={()=>{setillust2(false)}} />
          ): null}
          
          
          <PuzzleWrap>
            <ul>
              <li><img src="img/piece1.png" alt="dkjhfk" /></li>
              <li><img src="img/piece1.png" alt="dkjhfk" /></li>
              <li><img src="img/piece1.png" alt="dkjhfk" /></li>
              <li><img src="img/piece1.png" alt="dkjhfk" /></li>
            </ul>
          </PuzzleWrap>
          
        </div>
      </SecStyle>
  );
}

export default Illusts;