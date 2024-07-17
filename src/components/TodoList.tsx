import { useSelector } from "react-redux"
import { AppRootState } from "../redux-toolkit/store"

function TodoList() {
    const todo = useSelector((state: AppRootState) => state.todo.todos)
   return (
    <div>
        {
            todo.map((item, index) => {
                return <div key={index}>
                    <h1>{item}</h1>
                </div>
            })
        }
    </div>
  )
}

export default TodoList
