import { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { SecStyle, ToHome, SNB } from './style';
import {faCircleRight, faCaretLeft, faCaretDown, faCaretUp, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ToAbout = styled.li`
  position:absolute; right:50px; top:40px;
  width:50px; text-align:center;
  transform:rotate(-45deg);

  & .btntext{
    right:0px; top:-14px;
    transform:rotate(45deg);
  }
`;
const ToSheet = styled.li`
  position:absolute; left:50px; top:50%;
  transform:translateY(-50%);
  width:50px; text-align:center;

  & .btntext{
    left:0px; top:50%;
    transform:translateY(-50%);
  }
`;
const ToIllust = styled.li`
  position:absolute; left:50%; top:40px;
  transform:translateX(-50%);
  width:50px; text-align:center;

  & .btntext{
    left:50%; top:50%;
    transform:translate(-50%, -50%);
  }
`;
const BtnSns = styled.button`
  position:absolute; left:330px; top:170px;
  width:130px; height:30px; text-indent:-9999em;
  background:#000333;
  border-radius:10px;
  cursor:pointer;
`

function Contact(){
  const [screen, setScreen] = useState(false);
  const showToggle = () => {
    setScreen(!screen);
  }
  return(

    <SecStyle>
      <h2>Contact</h2>
      <div className="wrapper">
        <img className="background" src="img/contact.jpg" alt="" />
        <nav>
            <ul>
              <ToHome><Link to="/"><FontAwesomeIcon icon={faCaretDown} size="4x" color="#ddc2ff" /><span className="btntext toAbout">홈</span></Link></ToHome>
              <ToAbout className="toAbout"><Link to="/about" style={{color:'#333'}}><FontAwesomeIcon icon={faCaretRight} size="4x" color="#ddc2ff" /><span className="btntext toAbout">프로필</span> </Link></ToAbout>
              <ToIllust><Link to="/illusts" style={{color:'#333'}}><FontAwesomeIcon icon={faCaretUp} size="4x" color="#ddc2ff" /><span className="btntext toIllust">일러스트</span></Link ></ToIllust>
              <ToSheet><Link to="/sheets" style={{color:'#333'}}><FontAwesomeIcon icon={faCaretLeft} size="4x" color="#ddc2ff" /><span className="btntext toSheet">컨셉아트</span></Link ></ToSheet>
            </ul>
          </nav>

          <BtnSns onClick={showToggle} >SNS 토글 버튼</BtnSns>
            
            <SNB>
              <img className="phonebg" src={ screen ? "./img/turnOn.png" : "./img/turnOff.png"} alt="sns 화면" />
              {screen ? (
                <nav>
                  <h3>sns 연락처 목록</h3>
                  <ul className="snb">
                    <li><a className="email" href="770jj@naver.com">이메일</a></li>
                    <li><a className="kakao" href="https://open.kakao.com/o/sfwkpoOf" target="_blank">카카오톡 오픈채팅</a></li>
                    <li><a className="dillyhub" href="https://k.dillyhub.com/space/ymaa6tugljbeonq/projects" target="_blank">딜리헙 연재 계정</a></li>
                    <li><a className="blog" href="https://blog.naver.com/770jj" target="_blank">네이버 블로그</a></li>
                  </ul>
              </nav>
              ) : null}
              
            </SNB>
              
          
        
      </div>
    </SecStyle>
  );
}

export default Contact;