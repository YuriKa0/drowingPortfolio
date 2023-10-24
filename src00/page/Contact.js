import { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { SecStyle, ToHome, SNB } from './style';
import {faCircleRight, faCaretLeft, faCaretDown, faCaretUp, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const BtnSns = styled.button`
  position:absolute; left:300px; top:120px;
  width:130px; text-indent:-9999em;
  cursor:pointer;
`
  
function Contact(){
  const [screen, setScreen] = useState(false);
  return(

    <SecStyle>
      <h2>Contact</h2>
      <div className="wrapper">
        <img class="background" src="img/CONTACT.jpg" alt="" />
        <nav>
            <ul>
              <ToHome><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff" />Home</Link></ToHome>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/works">works</Link></li>
            </ul>
          </nav>
          <BtnSns onClick={()=>{ setScreen(true) }} >버튼</BtnSns>
          {!screen ? (
            <SNB>
              <h3>sns 연락처 목록</h3>
              <ul>
                <li>010-6649-9954</li>
                <li class="email"><a href="">770jj@naver.com</a></li>
                <li class="kakao">yurika18</li>
                <li class="instar">인스타</li>
              </ul>
            </SNB>
          ) : null}
        
      </div>
    </SecStyle>
  );
}

export default Contact;