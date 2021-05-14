import { RootState } from "../../../app/store";

export const loadedRoutesSelector = (state: RootState): any => state.loadedRoutes.edges;

export const weightEdgesSelector = (state: RootState): any => state.loadedRoutes.weightEdges;