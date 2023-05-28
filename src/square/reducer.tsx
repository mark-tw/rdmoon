import  { createSlice } from '@reduxjs/toolkit';
import {Square} from "./entity";

export type SquareState = {
    squares: Square[]
}

const initialSquares: SquareState = {
    squares: []
}

export const squareSlice = createSlice({
    name: 'square',
    initialState: initialSquares,
    reducers: {
        addSquare(state, action) {
            const newSquare = { id: `${Date.now()}`, color: action.payload };
            state.squares.unshift(newSquare);
        },
        removeSquare(state) {
            state.squares.pop();
        },
    },
});

export const { addSquare, removeSquare } = squareSlice.actions;

export default squareSlice.reducer;
