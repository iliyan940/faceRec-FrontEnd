import { ActionReducerMap, createSelector } from '@ngrx/store';
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

export const getPersons = createSelector(personReducer.getPersons, (data) =>{
    return data.persons;
});

export const getActivePerson = createSelector(personReducer.getPersons, (data) =>{
    return data.activePerson;
});

export const getLabels = createSelector(labelsReducer.getLabels, (data) =>{
    return data.labels;
});