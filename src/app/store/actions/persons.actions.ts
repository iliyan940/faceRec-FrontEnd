import { Action } from '@ngrx/store';
import { Person } from '../../shared/models/person.model';

export const ADD_PERSON = '[PERSON] Add';
export const REMOVE_PERSON = '[PERSON] Remove';

export const LOAD_PERSON = '[PERSON] Load';
export const LOAD_PERSON_SUCCESS = '[PERSON] Load Success';

//for the table, there is only load action, that is why there isn't dedicated class for them/
export const LOAD_PERSONS = '[PERSONS] Load';
export const LOAD_PERSONS_SUCCESS = '[PERSONS] Load Success';

//PERSON LABELS
export const ADD_LABEL = '[LABEL] Add';
export const DELETE_LABEL = '[LABEL] DELETE';

export class AddLabel implements Action {
    readonly type = ADD_LABEL;
    readonly payload: any;

    constructor(payload) {
        this.payload = payload;
    }
}

export class DeleteLabel implements Action {
    readonly type = DELETE_LABEL;
    readonly id: any;
    readonly index: any;

    constructor(id, index) {
        this.id = id;
        this.index = index;
    }
}

// Persons
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



export type Actions = LoadPersons | LoadPersonsSuccess | LoadPerson | LoadPersonSuccess | AddLabel | DeleteLabel;