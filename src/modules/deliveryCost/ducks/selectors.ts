import { RootState } from "../../../app/store";

export const deliveryCostSelector = (state: RootState): number => state.deliveryCost.deliveryCost;
export const deliveryErrorSelector = (state: RootState): number => state.deliveryCost.error;