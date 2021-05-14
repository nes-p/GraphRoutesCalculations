export type ActionStatus = 'IDLE' | 'LOADING' | 'FAIL' | 'SUCCESS';
export interface IPossibleRoutesState {
    error?: any;
    actionStatus: ActionStatus;
    routesNumber: number;
}