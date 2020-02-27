import * as PersonActions from '../actions/persons.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const initialState: Object = {
  persons: [],
  activePerson: {}
}

export function reducer(state = initialState, action: PersonActions.Actions) {
    switch(action.type) {
        case PersonActions.ADD_PERSON:
          return { state }

        case PersonActions.LOAD_PERSON:
          return state;
          
        case PersonActions.LOAD_PERSON_SUCCESS:
          console.log(state)
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

