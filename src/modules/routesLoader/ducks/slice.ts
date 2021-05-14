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
        loadRoutesInitActionCreator: (state) => {
            state.actionStatus = 'LOADING';
        },
        loadRoutesSuccessActionCreator: (state, { payload: { parsedRoutes, weightEdges } }) => {
            state.actionStatus = 'SUCCESS';
            state.edges = parsedRoutes;
            state.weightEdges = weightEdges;
        },
        loadRoutesFailureActionCreator: (state, action) => {
            state.actionStatus = 'FAIL';
            state.error = action.payload;
        },
        loadRoutesResetActionCreator: () => initialState

    }

});

export default loadRoutesSlice.reducer;

export const {
    loadRoutesInitActionCreator,
    loadRoutesFailureActionCreator,
    loadRoutesResetActionCreator,
    loadRoutesSuccessActionCreator
} = loadRoutesSlice.actions;