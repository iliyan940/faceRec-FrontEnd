import { ActionReducerMap } from '@ngrx/store';
import * as personReducer from './person.reducer';
import * as labelsReducer from './labels.reducer';


export interface AppState {
    persons: personReducer.State;
    labels: labelsReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
    persons: personReducer.reducer,
    labels: labelsReducer.reducer
};