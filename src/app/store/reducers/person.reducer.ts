import { Person } from '../../shared/models/person.model';
import * as PersonActions from '../actions/persons.actions';

const initialState: Person[] = []

export function reducer(state: Person[] = initialState, action: PersonActions.Actions) {
    switch(action.type) {
        case PersonActions.ADD_PERSON:
            return [...state, action.payload];
        case PersonActions.LOAD_PERSONS:
          return { ...state };
        case PersonActions.LOAD_PERSONS_SUCCESS:
          return [...action.payload];
        default:
            return state;
    }
}

