import styled from 'styled-components';

export const SecStyle = styled.section`
  width:1280px; margin:auto;
  position:absolute; left:50%; top:50%;
  transform:translate(-50%, -50%);
  & .background{
    width:100%; height:auto;
  }
  & h2{
    color:#fc0;
    display:none;
  }
  & li{
    color:#333;
  }
  
`;

export const ToHome = styled.li`
  position:absolute; left:50%; bottom:30px;
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

export const SNB = styled.nav`
  position:absolute; left:250px; top:180px;
  width:650px; height:330px;
  font-size: 2rem;
  & ul{
    padding:30px 40px;
  }
  & li{
    margin-bottom:20px;
    padding-left:60px;
    background:url('https://cdn-icons-png.flaticon.com/128/3687/3687004.png') no-repeat;
    background-size:contain;
  }
  & li.email{
    background-image:url('https://cdn-icons-png.flaticon.com/128/10400/10400895.png');
  }
  & li.kakao{
    background-image:url('https://cdn-icons-png.flaticon.com/128/3669/3669973.png');
  }
  & li.instar{
    background-image:url('https://cdn-icons-png.flaticon.com/128/4138/4138124.png');
  }
  background:#fcf;
`

export const SheetsWrap = styled.div`
width:1000px; height:768px;
`