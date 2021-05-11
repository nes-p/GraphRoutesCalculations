export type ActionStatus = 'IDLE' | 'LOADING' | 'FAIL' | 'SUCCESS';
export interface Edge {
    nodeFrom: string;
    nodeTo: string;
    weight: number;
}

export interface ILoadedRoutesState {
    edges: Edge[];
    error?: any;
    actionStatus: ActionStatus;
}