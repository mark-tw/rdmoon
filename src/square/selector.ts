import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

const stateSelector = (state: RootState) => state.square

export const squaresSelector = createSelector(stateSelector, (state) => state.squares)
