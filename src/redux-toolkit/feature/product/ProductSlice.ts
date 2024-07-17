import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BackUrl } from "../category/CategorySlice";
import axios from "axios";

export interface IProduct {
    color: string;
    description: string;
    image: string;
    price: number;
    rate: number;
    size: string;
    subtitle: string;
    title: string;
    id: string
} 

interface IProductInitialState {
    value: IProduct[];
    isLoading: boolean;
    isError: boolean
}

const initialState: IProductInitialState = {
    isLoading: false,
    isError: false,
    value: []
}

export const fetchProducts = createAsyncThunk('ProductsFecth', async () => {
    const response = await axios.get(`${BackUrl}products`);
    return response.data
})

const ProductSlice = createSlice({
    name: 'Products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.value = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export const productActions = ProductSlice.actions;

export default ProductSlice.reducer