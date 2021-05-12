export type ActionStatus = 'IDLE' | 'LOADING' | 'FAIL' | 'SUCCESS';

export interface IDeliveryCostState {
    deliveryCost: number;
    error?: any;
    actionStatus: ActionStatus;
}