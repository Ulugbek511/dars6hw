import { Route, Routes } from 'react-router-dom'
import './App.css'
import GeneraLayout from './components/generaLayout'
import Counter from './components/Counter'
import TodoItem from './components/TodoItem'
import Products from './components/Products'
import Category from './components/Category'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<GeneraLayout />}>
          <Route index element={<TodoItem />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/product' element={<Products />} />
          <Route path='/category' element={<Category />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
