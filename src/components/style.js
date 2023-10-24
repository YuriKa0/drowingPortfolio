import styled from 'styled-components';
//투두리스트의 가장 큰 프레임
export const Wrapper = styled.div`
  width: 500px;min-width: 400px;
  height: 90vh;min-height: 400px;
  background: #FFF;margin:40px auto;
  border:3px solid #FFEEFA;
  border-radius: 10px;overflow: hidden;
  position: relative; 
  & input {
    /* outline: none; */
  }
`
//날짜가 보여지는 상단 프레임
export const HeadStyle = styled.section`
  padding: 20px 16px;
  border-bottom: 2px solid #FEEDFB;
  
  & h2 {
    margin-bottom: 20px;
  }
`
//할일 추가 하는 섹션
export const AddStyle = styled.section`
  position: absolute;left:0;right:0;bottom:0;
  
  & .bg {
    padding: 16px;
    /* padding-bottom: 50px; height:60px; */
    background-color: #FEEDFB;
  }
  & .box {
    background-color: #FFF;
    border: 0 none;
    border-radius:5px;
  }
  & input {
    border: none; padding: 8px 16px;
    width: calc(100% - 65px);
    border-radius:5px;
  }
  & .btnAddItem {
    color: #AAA;font-size: 18px;transform: translateY(3px)
  }
  & button{
    border:0 none; background : transparent;
    cursor:pointer;
  }
`
//리스트 스타일
export const ListStyle = styled.section`
  padding: 16px;  
  height:100%;
  box-sizing:border-box;
  background:url('https://cdn-icons-png.flaticon.com/128/6118/6118913.png') repeat-x right 0 bottom 150px;
  background-size:30px;
  & ul{
    padding:0;
    
  }
  & li { 
    height:42px;
    border-bottom:1px solid #E3CCE8;
  }
  & span, input[type=text] {
    flex-grow:10;
    margin:0 10px
  }
  & span{
    font-size:14px;
  }
  & button {
    color: #AAA; margin-left: 10px;
    background:transparent;
    border:0 none;
    cursor:pointer;
  }
`
//아이템 스타일(li 항목)
export const ItemStyle = styled.li`
  display: flex;
  line-height: 42px;
  /* border-bottom: 1px solid #dedede; */
`