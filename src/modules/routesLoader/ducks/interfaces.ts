export type ActionStatus = 'IDLE' | 'LOADING' | 'FAIL' | 'SUCCESS';

export interface ILoadedRoutesState {
    error?: any;
    actionStatus: ActionStatus;
    edges: any,
    weightEdges: Array<string>
}