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
  /* transform:translateX(-10%); */
`;
const ToWork = styled.li`
  background:#fcf;
  padding:5px 15px;
  cursor:pointer;
  position:absolute; right:130px; top:250px;
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
        <img class="background" src="img/home.jpg" alt="" />
        <nav>
          <ul>
            <ToAbout className="toAbout"><Link to="/about" style={{color:'#333'}}><FontAwesomeIcon icon={faCircleRight} size="3x"/></Link></ToAbout>
            <ToWork><Link to="/works" style={{color:'#333'}}>Work</Link ></ToWork>
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