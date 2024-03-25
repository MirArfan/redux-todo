import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo app</h1>
      <AddTodoForm/>
      <TodoList/>
    </>
  )
}

export default App
