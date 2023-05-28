import { configureStore } from '@reduxjs/toolkit'
import {squareSlice} from "../square/reducer";

export const store = configureStore({
    reducer: {
        square: squareSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

