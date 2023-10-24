// import logo from './logo.svg';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { SecStyle, ToHome, PuzzleWrap } from './style';

import {faCircleRight, faCaretLeft, faCaretDown, faCaretUp, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ToWorks = styled.li`
  position:absolute; right:160px; top:45%;
  width:50px;
  text-align:center;
  background:#fcf;
`;
const ToContact = styled.li`
  position:absolute; left:50px; bottom:30px;
  rotate:45deg;
`;
const BoardFront = styled.img`
  position:absolute; left:0; top:0;
  width:100px; height:auto;
  
`
function About(){
  const [boardShow, setBoardShow] = useState(true);
  const boardToggle = () => {
    setBoardShow(!boardShow);
  }
  const [puzzle, setPuzzle] = useState(true);
  return(
      <SecStyle>
        <h2>ABOUT</h2>
        <div>
          <img className="background" src="img/aboutme.jpg" alt="내 소개 방" />
          <nav>
            <ul>
              <ToHome className="toHome"><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff"/></Link></ToHome>
              <ToWorks><Link to="/works"><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff"/></Link></ToWorks>
              <ToContact><Link to="/contact"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff"/></Link></ToContact>
            </ul>
          </nav>
          {boardShow ? (
          <img className="board" src="img/boardFront.png" alt="프로필" onClick={boardToggle} />
          ) : (
            <div className="board boardBack">
          <img className="" src="img/boardBack.png" alt="프로필 뒷면" onClick={boardToggle} />
          { puzzle ? (<img className="p_about" src="img/puzzle_about.png" alt="퍼즐조각1" onClick={()=>{ setPuzzle(false) }} />) : null }
          
          </div>
          )}
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

export default About;