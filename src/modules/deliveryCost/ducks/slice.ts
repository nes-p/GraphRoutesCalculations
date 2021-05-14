import { createSlice } from "@reduxjs/toolkit";
import { IDeliveryCostState } from "./interfaces";

const initialState: IDeliveryCostState = {
    actionStatus: 'IDLE',
    error: '',
    deliveryCost: 0
}

const deliveryCostSlice = createSlice({
    name: 'deliveryCost',
    initialState,
    reducers: {
        deliveryCostInitAction: (state) => {
            state.actionStatus = 'LOADING';
        },
        deliveryCostSuccessAction: (state, { payload }) => {
            state.actionStatus = 'SUCCESS';
            state.deliveryCost = payload;
            state.error = '';
        },
        deliveryCostFailureAction: (state, action) => {
            state.actionStatus = 'FAIL';
            state.error = action.payload;
            state.deliveryCost = 0;
        },
        deliveryCostResetAction: () => initialState
    }

});

export default deliveryCostSlice.reducer;

export const {
    deliveryCostInitAction,
    deliveryCostSuccessAction,
    deliveryCostFailureAction,
    deliveryCostResetAction
} = deliveryCostSlice.actions;