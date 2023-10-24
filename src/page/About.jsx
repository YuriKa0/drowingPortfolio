// import logo from './logo.svg';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { SecStyle, ToHome } from './style';

import {faCaretLeft, faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ToIllust = styled.li`
  position:absolute; right:40px; top:45%;
  width:50px;
  text-align:center;

  & .btntext{
    right:0px; top:-0px;
  }
`;
const ToSheet = styled.li`
  position:absolute; right:50px; bottom:40px;
  width:50px;
  transform:rotate(45deg);
  text-align:center;

  & .btntext{
    right:0px; bottom:-7px;
    transform:rotate(-45deg);
  }
`;

const ToContact = styled.li`
  position:absolute; left:50px; bottom:40px;
  width:50px; text-align:center;
  transform:rotate(-45deg);

  & .btntext{
    left:0px; bottom:-14px;
    transform:rotate(45deg);
  }
`;

function About(){
  return(
      <SecStyle>
        <h2>ABOUT</h2>
        <div>
          <img className="background" src="img/aboutme.jpg" alt="프로필 페이지 배경" />
          <nav>
            <ul>
              <ToHome className="toHome"><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff"/><span className="btntext toAbout">홈</span></Link></ToHome>
              <ToIllust><Link to="/illusts"><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff"/><span className="btntext toIllust">일러스트</span></Link ></ToIllust>
              <ToSheet><Link to="/sheets"><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff"/><span className="btntext toSheet">컨셉아트</span></Link ></ToSheet>
              <ToContact><Link to="/contact"><FontAwesomeIcon icon={faCaretLeft} size="4x" color="#ddc2ff"/><span className="btntext toAbout">SNS</span></Link></ToContact>
            </ul>
          </nav>
          
          <div className="profile">
            <div className="profile_img"><img src="./img/persona.png" alt="프로필 이미지" /></div>
            <dl>
                <dt>이름</dt>
                <dd>권유림</dd>
                <dt>생년월일</dt>
                <dd>1999.05.26</dd>
                <dt>학력</dt>
                <dd>한양대 ERICA<br />엔터테인먼트 디자인</dd>
            </dl>
            <p className="introtext">캐릭터 디자이너 & 일러스트레이터 권유림입니다.</p>
          </div>

        </div>
      </SecStyle>
  );
}

export default About;