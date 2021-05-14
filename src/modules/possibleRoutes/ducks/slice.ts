

import { createSlice } from "@reduxjs/toolkit";
import { IPossibleRoutesState } from "./interfaces";

const initialState: IPossibleRoutesState = {
    actionStatus: 'IDLE',
    error: '',
    routesNumber: 0
}

const possibleRoutesSlice = createSlice({
    name: 'deliveryCost',
    initialState,
    reducers: {
        possibleRoutesInitAction: (state) => {
            state.actionStatus = 'LOADING';
        },
        possibleRoutesSuccessAction: (state, { payload }) => {
            state.actionStatus = 'SUCCESS';
            state.routesNumber = payload;
        },
        possibleRoutesFailureAction: (state, action) => {
            state.actionStatus = 'FAIL';
            state.error = action.payload;
            state.routesNumber = 0;
        },
        possibleRoutesCostResetAction: () => initialState
    }

});

export default possibleRoutesSlice.reducer;

export const {
    possibleRoutesInitAction,
    possibleRoutesSuccessAction,
    possibleRoutesFailureAction,
    possibleRoutesCostResetAction
} = possibleRoutesSlice.actions;