import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {SecStyle} from './style';
import styled from 'styled-components';
import {faCircleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// const Toabout = styled.
const ToAbout = styled.li`
  background:#fcf;
  padding:5px 15px;
  cursor:pointer;
  position:absolute; left:13%; top:100px;
`;
const ToWork = styled.li`
  background:#fcf;
  padding:5px 15px;
  cursor:pointer;
  position:absolute; right:130px; top:250px;
`;
const ToIllust = styled.li`
  background:#fcf; padding:5px 15px;
  width:400px; height:260px;
  cursor:pointer;
  position:absolute; left:530px; top:50px;
`;
const ToSheet = styled.li`
  background:#fcf; padding:5px 15px;
  width:100px; height:260px;
  cursor:pointer;
  position:absolute; left:330px; top:50px;
`;
const ToContact = styled.li`
  background:#fcf;
  padding:5px 15px;
  cursor:pointer;
  position:absolute; right:130px; top:500px;
`;

function Home(){
  const navigate = useNavigate();

  return(
    
    <SecStyle>
      <div className="wrapper">
        <img class="background" src="img/home.jpg" alt="홈화면" />
        <nav>
          <ul>
            <ToAbout className="toAbout"><Link to="/about" style={{color:'#333'}}><FontAwesomeIcon icon={faCircleRight} size="3x"/></Link></ToAbout>
            {/* <ToWork><Link to="/works" style={{color:'#333'}}>Work</Link ></ToWork> */}
            <ToIllust><Link to="/illusts" style={{color:'#333'}}>illusts</Link ></ToIllust>
            <ToSheet><Link to="/sheets" style={{color:'#333'}}>sheets</Link ></ToSheet>
            <ToContact><Link to="/contact" style={{color:'#333'}}>Contact</Link></ToContact>
          </ul>
        </nav>
        {/* <ToAbout className="toAbout" onClick={()=>{ navigate('/about') }}>내소개</ToAbout>
        <button className="toWorks" onClick={()=>{ navigate('/works') }}>작업물</button>
        <button className="toContact" onClick={()=>{ navigate('/contact') }}>연락처</button> */}
      </div>
      
        <h2>Home</h2>
    </SecStyle>
  );
}

export default Home;