import * as PersonActions from '../actions/persons.actions';
import { createFeatureSelector } from '@ngrx/store';
import { act } from '@ngrx/effects';

export interface State {
  persons: [],
  activePerson: {}
}

const initialState: State = {
  persons: [],
  activePerson: {}
}

export function reducer(state = initialState, action: PersonActions.Actions) {
    switch(action.type) {
        case PersonActions.LOAD_PERSON:
          return state;
          
        case PersonActions.LOAD_PERSON_SUCCESS:
           return {
             ...state,
             activePerson: action.payload
            };

        //for PERSONS
        case PersonActions.LOAD_PERSONS:
          return { ...state };

        case PersonActions.LOAD_PERSONS_SUCCESS:
          return  {
            ...state,
            persons: action.payload
          };

        case PersonActions.ADD_LABEL:
          return {
            ...state,
            activePerson: {
              ...state.activePerson,
              labels: [
                ...state.activePerson.labels,
                action.payload
              ]
            }
          }



          case PersonActions.DELETE_LABEL:
            let newLabels = state.activePerson.labels.splice(action.index, 1)

            return {
              ...state,
              activePerson: {
                ...state.activePerson,
                labels: state.activePerson.labels
              }
            }

        default:
            return state;
    }
}

export const getPersons = createFeatureSelector<State>('persons');

