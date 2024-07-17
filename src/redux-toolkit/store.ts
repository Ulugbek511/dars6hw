import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/counter/CounterSlice'
import todoReducer from './feature/todo-app/TodoSlice'
import category from './feature/category/CategorySlice'
import productReducer from './feature/product/ProductSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        category: category,
        products: productReducer
    }
})

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;