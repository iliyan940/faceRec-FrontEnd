import { Action } from '@ngrx/store';
import { Person } from '../../shared/models/person.model';

export const ADD_PERSON = '[PERSON] Add';
export const REMOVE_PERSON = '[PERSON] Remove';

export const LOAD_PERSON = '[PERSON] Load';
export const LOAD_PERSON_SUCCESS = '[PERSON] Load Success';

//for the table, there is only load action, that is why there isn't dedicated class for them/
export const LOAD_PERSONS = '[PERSONS] Load';
export const LOAD_PERSONS_SUCCESS = '[PERSONS] Load Success';


export class AddPerson implements Action {
    readonly type = ADD_PERSON

    constructor(public payload: Person) {}
}

export class RemovePerson implements Action {
    readonly type = REMOVE_PERSON;

    constructor(public payload: Person) {}
}


export class LoadPerson implements Action {
    readonly type = LOAD_PERSON;
    readonly payload: any;

    constructor(payload) {
         this.payload = payload;
    }
}

export class LoadPersonSuccess implements Action {
    readonly type = LOAD_PERSON_SUCCESS;
    payload: any;

    constructor(payload) {
        this.payload = payload;
    }
}

// For the table
export class LoadPersons implements Action {
    readonly type = LOAD_PERSONS;
    constructor() {}
}

export class LoadPersonsSuccess implements Action {
    readonly type = LOAD_PERSONS_SUCCESS;
    payload: any;

    constructor(payload) {
        this.payload = payload;
    }
}



export type Actions = AddPerson | RemovePerson | LoadPersons | LoadPersonsSuccess | LoadPerson | LoadPersonSuccess;