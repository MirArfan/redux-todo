import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import  style from './todoItem.module.css';
const AddTodoForm = () => {
    const [value, setValue]=useState();
    
    const dispatch=useDispatch();
    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo({
            title:value,
            
        }))
        setValue('');
        
    }
  return (
    <form className={style.input_box} onSubmit={onSubmit} >
        
        <input type="text" placeholder='add todo...' value={value} onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' >Add</button>
    </form>
  )
}

export default AddTodoForm