import { Action } from '@ngrx/store';

export const LOAD_LABELS = '[LABELS] LOAD';
export const LOAD_LABELS_SUCCESS = '[LABELS] LOAD SUCCESS';

export class LoadLabels implements Action {
    readonly type = LOAD_LABELS;

    constructor() {}
}

export class LoadLabelsSuccess implements Action {
    readonly type = LOAD_LABELS_SUCCESS;
    payload: any;

    constructor(payload) {
        this.payload = payload;
    }
}

export type Actions = LoadLabels | LoadLabelsSuccess;
