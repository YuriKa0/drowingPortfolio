//ColorLabel.js
import {useState} from 'react'
import styled from 'styled-components'


const ColorLabelBox = styled.div`
  width: 100%; padding: 3px; 
  display:flex; justify-content:center;
  /* position: absolute; right: 5px;bottom: 35px; */
  /* border: 1px solid #CCC; */
  /* background: #FFF; */
  /* box-shadow: 1px 1px 3px rgba(0,0,0,0.2) */
`;
const RadioWrapper = styled.label`
  display: inline-block; width: 30px; height: 30px;
  line-height: 30px; margin: 10px;
  & input[type="radio"] {
    appearance: none;
    width: 100%;height: 100%;
    border-radius: 50%;
    background-color: ${({color}) => color};
    box-shadow:0 0 0 3px #fff;
  }
  & input[type="radio"]:checked {
    background-image: url("https://cdn-icons-png.flaticon.com/128/10486/10486745.png");
    background-size: 50% 50%;
    background-position: center;
    background-repeat: no-repeat;
  }
`

function ColorLabel({color, setColor}) {
  //const [color, setColor] = useState()
  const options =[
    {id: 1, value: 'silver'},
    {id: 2, value: 'tomato'},
    {id: 3, value: 'cornflowerblue'},
    {id: 4, value: 'gold'},
    /* {id: 5, value: 'slateblue'}, 
    {id: 6, value: 'dodgerblue'}, 
    {id: 7, value: 'tomato'}, 
    {id: 8, value: 'hotpink'}, 
    {id: 9, value: 'khaki'},  */
  ];  
   
  //컬러 라디오 클릭하면 컬러이름
  const onChange = (e) => {
    setColor(e.target.value)
  }
  return(
    <>
      {/* input을 포함하는 div가 안보이다가 button을 클릭하면 팝업되도록 */}

          <ColorLabelBox>
            {options.map((item) => (
              <RadioWrapper key={item.id} color={item.value}>
                <input type="radio" name="colorLabel" value={item.value} onChange={onChange} />
              </RadioWrapper>
            ))}
          </ColorLabelBox>
   
    </>
  )
}

export default ColorLabel;