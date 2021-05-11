import { RootState } from "../../../app/store";

export const loadedRoutesSelector = (state: RootState) => state.loadedRoutes.edges;