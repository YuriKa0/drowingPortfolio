import styled from 'styled-components';

export const SecStyle = styled.section`
  width:1366px; margin:auto;
  position:absolute; left:50%; top:50%;
  transform:translate(-50%, -50%);
  & .background{
    width:100%; height:auto;
  }
  & h2{
    color:#fc0;
    display:none;
  }
  & .btntext{
    position:absolute; display:block;
    padding:15px 20px; 
    width:70px;
    background:#fff; text-align:center;
    border:4px solid #aaf;
    border-radius:10px;
    font-weight:bold;
    box-shadow:0 2px 8px rgba(0,0,0,0.3);
  }
  
`;

export const ToHome = styled.li`
  position:absolute; left:50%; bottom:40px;
  transform:translateX(-50%);
  & .btntext{
    left:50%; top:50%;
    transform:translate(-50%, -50%);
  }
`;

export const PuzzleWrap = styled.div`
  position:absolute; right:0; top:0;
  width:130px; height:100%;
  background:#ffe;

  & ul{
    padding:30px 10px;
  }
  & li{
    margin-bottom:30px;
  }
`

export const SNB = styled.div`
  position:absolute; left:50%; bottom:110px;
  transform:translateX(-50%);
  width:825px; height:470px;
  font-size: 2rem;
  & nav{
    position:absolute; left:120px; top:70px;
    padding:30px 40px;
  }
  & ul{
    display:flex; flex-flow:row wrap;
    width:250px; height:250px;
    gap:50px;
  }
  & a{
    display:block; width:100px; height:100px;
    text-indent:-9999em;
    background-size:contain;
  }
  
  
  
  
`

