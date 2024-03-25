
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

import  style from './todoItem.module.css';

const TodoItem = ({id, title, completed}) => {
  const dispatch=useDispatch();


  const handleCheckboxClick=()=>{
	dispatch(toggleComplete({ id, completed: !completed }))
  }
  const handleDeleteClick=()=>{
	dispatch(deleteTodo({id:id}))
  }

  return (
	<li  className={`${style.list_item} ${completed && style.list_item_success}`}>
		<div className={style.box}>
			<span>
				<input type="checkbox" checked={completed} onClick={handleCheckboxClick} />
			
			{title}
			</span>
			<button onClick={handleDeleteClick}>
				delete
			</button>
		</div>
	</li>
  )
}

export default TodoItem