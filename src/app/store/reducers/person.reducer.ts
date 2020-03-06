import * as PersonActions from '../actions/persons.actions';
import { createFeatureSelector } from '@ngrx/store';

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
        case PersonActions.ADD_PERSON:
          return state;

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

        default:
            return state;
    }
}

export const getPersons = createFeatureSelector<State>('persons');

