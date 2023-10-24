import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {SecStyle} from './style';
import styled from 'styled-components';
import {faCircleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Title from './Title';

// const Toabout = styled.
const ToAbout = styled.li`
  position:absolute; left:239px; top:250px;
  padding:5px 5px;  

  & .btntext{
    left:50%; top:50%;
    transform:translate(-50%, -50%);
  }
`;

const ToIllust = styled.li`
  position:absolute; right:190px; top:80px;
  padding:5px 5px;
  & .btntext{
    left:50%; top:50%;
    transform:translate(-50%, -50%);
  }
`;
const ToSheet = styled.li`
  position:absolute; left:700px; top:393px;
  padding:5px 5px;

  & .btntext{
    left:20px; top:0px;
  }
`;
const ToContact = styled.li`
  position:absolute; right:220px; top:420px;
  padding:5px 5px;

  & .btntext{
    right:0px; top:-70px;
  }
`;

function Home(){
  const navigate = useNavigate();

  return(
    
    <SecStyle>
      <Title />
      <div className="wrapper">
        <img className="background" src="img/home.jpg" alt="홈화면" />
        
        <nav>
          <ul>
            <ToAbout className="toAbout"><Link to="/about" style={{color:'#333'}}><img src="img/toAbout.png" alt="자기소개 페이지 이동 버튼" /><span className="btntext toAbout">프로필</span> </Link></ToAbout>
            <ToIllust><Link to="/illusts" style={{color:'#333'}}><img src="img/toIllust.png" alt="일러스트 페이지 이동 버튼" /><span className="btntext toIllust">일러스트</span></Link ></ToIllust>
            <ToSheet><Link to="/sheets" style={{color:'#333'}}><img src="img/toSheet.png" alt="캐릭터 컨셉아트 페이지 이동 버튼" /><span className="btntext toSheet">컨셉아트</span></Link ></ToSheet>
            <ToContact><Link to="/contact" style={{color:'#333'}}><img src="img/toContact.png" alt="sns 페이지 이동 버튼" /><span className="btntext toContact">SNS</span></Link></ToContact>
          </ul>
        </nav>
        <div className="bg_object" ><img src="img/background.png" alt=""/> </div>
      </div>
      
        <h2>Home</h2>
    </SecStyle>
  );
}

export default Home;