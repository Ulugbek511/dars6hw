import { createSlice } from "@reduxjs/toolkit";

interface ICounterInitialState {
    value: number;
}

const InitialState: ICounterInitialState = {
    value: 0,
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState: InitialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const counterActions = CounterSlice.actions;

export default CounterSlice.reducer
