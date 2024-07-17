import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux-toolkit/store'
import { ChangeEvent, useState } from 'react'
import { todoActions } from '../redux-toolkit/feature/todo-app/TodoSlice'

function Todo() {
    const dispatch = useDispatch<AppDispatch>()
    const [todos, setTodos] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTodos(e.target.value)
    }
    const handleSubmit = () => {
      dispatch(todoActions.addTodo(todos))
      setTodos('')
    }
  return (
    <div>
      <label htmlFor="todo">Todo:</label>
      <input
        className='border rounded-lg px-4 py-1 cursor-pointer m-5' 
        type="text"
        id='todo'
        placeholder='Write Todos'
        value={todos}
        onChange={handleChange} 
      />
      <button type='button' className='border cursor-pointer px-4 py-1 rounded-md' onClick={handleSubmit}>add Todo </button>
    </div>
  )
}

export default Todo
