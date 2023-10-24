//TodoList.js
import { useState } from 'react'

import TodoItem from './TodoItem'
import { ListStyle } from './style'

function TodoList({todoListItem, setTodoListItem}) {
  const [selectCategory, setSelectCategory] = useState('전체');
  
  //todoListItem.category와 selectCategory가 같은 값만 필터링 filter() 
  const filterTodoList = (selectCategory === '전체') 
    ? todoListItem 
    : todoListItem.filter((item) => item.category === selectCategory) ;    
  
  return (
  <>
    <ListStyle>
      
      {/* 할일 목록 */}
      <ul>
        {/* 
          selectCategory가 없으면 추가된 내용 전체가 리스트 처리
        {todoListItem.map((todoItem) =>  */}
        {/* //필터링 된 내용을 다시 리스트로 재배열 map() */}
        {filterTodoList.map((todoItem) =>
          <TodoItem key={todoItem.id}
            todoItem={todoItem}
            todoListItem={todoListItem}
            setTodoListItem={setTodoListItem}
          />
        )}
      </ul>
    </ListStyle>
    </>
  )
}

export default TodoList;