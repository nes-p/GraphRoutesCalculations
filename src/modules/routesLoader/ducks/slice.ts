import { createSlice } from '@reduxjs/toolkit';
import { ILoadedRoutesState } from './interfaces';

const initialState: ILoadedRoutesState = {
    actionStatus: 'IDLE',
    error: false,
    edges: {},
    weightEdges: []
}
const loadRoutesSlice = createSlice({
    name: 'loadRoutes',
    initialState,
    reducers: {
        loadRoutesInitAction: (state) => {
            state.actionStatus = 'LOADING';
        },
        loadRoutesSuccessAction: (state, { payload: { parsedRoutes, weightEdges } }) => {
            state.actionStatus = 'SUCCESS';
            state.edges = parsedRoutes;
            state.weightEdges = weightEdges;
        },
        loadRoutesFailureAction: (state, action) => {
            state.actionStatus = 'FAIL';
            state.error = action.payload;
        },
        loadRoutesResetAction: () => initialState

    }

});

export default loadRoutesSlice.reducer;

export const {
    loadRoutesInitAction,
    loadRoutesFailureAction,
    loadRoutesResetAction,
    loadRoutesSuccessAction
} = loadRoutesSlice.actions;