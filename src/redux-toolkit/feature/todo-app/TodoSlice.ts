import { createSlice } from "@reduxjs/toolkit";

interface ITodoApp {
    todos: Array<string>;
}

const initialState: ITodoApp = {
    todos: []
}

const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }
    }
})

export const todoActions = TodoSlice.actions;

export default TodoSlice.reducer;