import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPenToSquare, faThumbtack, faFloppyDisk} from '@fortawesome/free-solid-svg-icons';
import {ItemStyle} from './style';

function TodoItem({todoItem, todoListItem, setTodoListItem}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoItem.text);
  
  //checkbox toggle
  const onChangeCheckbox = () => {
    const newTodoList = todoListItem.map((item) => ({
      ...item,
      checked: (item.id === todoItem.id) ? !item.checked : item.checked
    }));
    setTodoListItem(newTodoList);
  }  
  //save 버튼
  const editCompleteItem = () => {
    const newTodoList = todoListItem.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? editText : item.text,
    }));
    setTodoListItem(newTodoList);
    setIsEditing(false);
  }
  //상단 고정 핀
  const togglePin = () => {
    const newTodoList = todoListItem.map((item) => ({
      ...item,
      isPined: (item.id === todoItem.id) ? !item.isPined : item.isPined
    }));
    //핀을 클릭한 항목의 배열 인덱스번호 찾기 //[2]
    const currentIndex = newTodoList.findIndex((item)=>item.id === todoItem.id);
    
    //전체 항목에서 currentIndex의 배열 인덱스로 항목찾기
    const currentItem = newTodoList[currentIndex];
    
    //기존배열에서 클릭한 항목 삭제
    newTodoList.splice(currentIndex,1);
    
    if(currentItem.isPined) {
      newTodoList.unshift(currentItem);
    } else {
      newTodoList.push(currentItem);
    }    
    setTodoListItem(newTodoList);
    console.log(todoItem.isPined);
  }
  const pinColor = {
    color: todoItem.isPined ? 'red' : ''
  }
  //remove button 
  const removeItem = (id) => {
    const updateTodoList = todoListItem.filter((item) => item.id !== id)
    setTodoListItem(updateTodoList)
  }
  return (
    <>
      <ItemStyle>
        <input type="checkbox" checked={todoItem.checked} onChange={onChangeCheckbox} disabled={isEditing} />
        {isEditing ? ( //true일 때 input
          <>
            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} maxLength="30" />
            <button onClick={editCompleteItem}><FontAwesomeIcon icon={faFloppyDisk} /></button>
          </>
        ) : ( //false일 때 span
          <>
            <span style={{textDecoration : (todoItem.checked) ? 'line-through' : 'none' , color : (todoItem.checked) ? '#aaa' : '#333'}}>{todoItem.text}</span>
            {/* <span>{todoItem.category}</span> */}
            <button onClick={togglePin} style={pinColor}>
              <FontAwesomeIcon icon={faThumbtack} />
            </button>
            {!todoItem.checked && (
              <button onClick={() => setIsEditing(true)}>
                <FontAwesomeIcon icon={faPenToSquare} />  
              </button>
            )}
          </>
        )}        
        <button onClick={() => removeItem(todoItem.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </ItemStyle>
    </>
  );
}

export default TodoItem;
