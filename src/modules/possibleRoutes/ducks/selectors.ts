import { RootState } from "../../../app/store";

export const possibleRoutesSelector = (state: RootState): number => state.possibleRoutes.routesNumber;
export const possibleRoutesErrorSelector = (state: RootState): number => state.possibleRoutes.error;