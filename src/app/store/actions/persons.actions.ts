import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Person } from '../../shared/models/person.model';

export const ADD_PERSON = '[PERSON] Add';
export const REMOVE_PERSON = '[PERSON] Remove';
export const LOAD_PERSONS = '[PERSON] Load';
export const LOAD_PERSONS_SUCCESS = '[PERSON] Load Success';

export class AddPerson implements Action {
    readonly type = ADD_PERSON

    constructor(public payload: Person) {}
}

export class RemovePerson implements Action {
    readonly type = REMOVE_PERSON;

    constructor(public payload: Person) {}
}

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

export type Actions = AddPerson | RemovePerson | LoadPersons | LoadPersonsSuccess;