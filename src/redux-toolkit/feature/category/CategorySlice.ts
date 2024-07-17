import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ICategory {
    id: string;
    name: string;
    image: string
}

export const BackUrl = "https://ecommerce-backend-fawn-eight.vercel.app/api/"

interface ICategoryInitialState {
    value: ICategory[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: ICategoryInitialState = {
    value: [],
    isLoading: false,
    isError: false
}

export const fetchCategory = createAsyncThunk('categoryFecth', async () => {
    const response = await axios.get<ICategory[]>(`${BackUrl}categories`)
    return response.data
}) 

const CategorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.value = action.payload
        })
        builder.addCase(fetchCategory.rejected, (state) => {
            state.isError = true
        })
    }
})

export const categoryActions = CategorySlice.actions;

export default CategorySlice.reducer;