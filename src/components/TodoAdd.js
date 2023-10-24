//TodoAdd.js
import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {AddStyle} from './style'

function TodoAdd({todoListItem,setTodoListItem}) {
  const [nextId, setNextId] = useState(todoListItem.length + 1);
  const [inputText, setInputText] = useState('');
  const inputRef = useRef();
  
  const inputItem = (e) => {//input
    setInputText(e.target.value);
    //setTodoListItem(e.target.value)
  }
  const addItem = () => { //button(전송)
    const nextTodoList = todoListItem.concat({
      id:nextId, text:inputText, checked:false,
    })
    setNextId(nextId + 1);
    setInputText('');
    inputText && setTodoListItem(nextTodoList);
    inputRef.current.focus();
  }
  
  return (
    <AddStyle>
      <div className="bg">
        <div className="box">
          <input type="text" ref={inputRef} value={inputText} placeholder='할 일을 입력하세요' onChange={inputItem} maxLength="30" />
          <button className="btnAddItem" onClick={addItem}> <FontAwesomeIcon icon={faPaperPlane} style={{color: 'powderblue' }} /></button>
        </div>
      </div>
    </AddStyle>
  );
}

export default TodoAdd;