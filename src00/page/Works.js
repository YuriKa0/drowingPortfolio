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
function Works(){
  const [work1, setWork1] = useState(false);
  const [work2, setWork2] = useState(false);
  return(

      <SecStyle>
        <h2>Works</h2>
        <div className="wrapper">
          <img className="background" src="img/WORKS.jpg" alt="작업물 창 배경그림" onClick={()=>{
            
          }} />
          <nav>
            <ul>
              <ToHome><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff" /></Link></ToHome>
              <ToAbout><Link to="/about"><FontAwesomeIcon icon={faCaretLeft} size="4x" color="#ddc2ff" /></Link></ToAbout>
              <ToContact><Link to="/contact"><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff" /></Link></ToContact>
            </ul>
          </nav>
          
          <img className="frame1" src="img/frame1.png" alt="작업물1" onClick={()=>{ setWork1(true)}} />
          <img className="frame2" src="img/frame2.png" alt="작업물2" onClick={()=>{ setWork2(true)}} />
          { work1 ? (<img className="work1" src="img/work1.jpg" alt="사막의 고양이 일러스트" onClick={()=>{setWork1(false)}} />) : null}
          { work2 ? (
          <img className="work2" src="img/work2.jpg" alt="미리 전신 일러스트" onClick={()=>{setWork2(false)}} />
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

export default Works;