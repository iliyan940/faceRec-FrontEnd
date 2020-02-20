import { Person } from '../shared/models/person.model';
import * as PersonActions from '../actions/persons.actions';

const initialState: Person[] = [
  { 
    "id": 1,
    "name": "Mir",
    "gender": "Male",
    "age": 23,
    "apartment": "N2",
    "tenant": false,
    "labels": {},
    "facebook": "https://www.facebook.com/"
  },
  {
    "id": 2,
    "name": "John",
    "gender": "Male",
    "age": 32,
    "apartment": "N22",
    "tenant": false,
    "labels": {
      
    },
    "facebook": "https://www.facebook.com/"
  },
  {
    "id": 3,
    "name": "Doe",
    "gender": "Male",
    "age": 55,
    "apartment": "N412",
    "tenant": false,
    "labels": {},
    "facebook": "https://www.facebook.com/"
  }
]

export function reducer(state: Person[] = initialState, action: PersonActions.Actions) {
    switch(action.type) {
        case PersonActions.ADD_PERSON:
            return [...state, action.payload];
        default:
            return state;
    }
}

