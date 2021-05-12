import { RootState } from "../../../app/store";

export const loadedRoutesSelector = (state: RootState): any => state.loadedRoutes.edges;