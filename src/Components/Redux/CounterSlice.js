import { createSlice } from "@reduxjs/toolkit";

export const CounterSLice = createSlice({
    name: "counter",
    initialState: {
        cross: parseInt(localStorage.getItem("cross"), 10) || 0,
        circle: parseInt(localStorage.getItem("circle"), 10) || 0,
    },
    reducers: {
        setCross: (state, action) => {
            state.cross += action.payload;
            localStorage.setItem("cross", state.cross.toString())
        },
        setCircle: (state, action) => {
            state.circle += action.payload;
            localStorage.setItem("circle", state.circle.toString())
        }
    }
})
export const { setCross, setCircle} = CounterSLice.actions
export const counterReducer = CounterSLice.reducer