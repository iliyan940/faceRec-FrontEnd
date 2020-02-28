import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects'; 
import * as personActions from '../actions/persons.actions';
import { PersonDataService } from '../../core/services/person-data.service'
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class PersonsEffects {
    constructor(private actions$: Actions, private personService: PersonDataService) {}

    @Effect()
    loadPersons$ = this.actions$
        .pipe(
            ofType(personActions.LOAD_PERSONS),
            mergeMap(() => this.personService.getAll()
                .pipe(
                    map(persons => ({ type: personActions.LOAD_PERSONS_SUCCESS, payload: persons })),
                    catchError(() => EMPTY)
                )
            )
        )

    @Effect()
    loadPerson$ = this.actions$
        .pipe(
            ofType<any>(personActions.LOAD_PERSON),
            mergeMap((action) => this.personService.get(action.payload)
                .pipe(
                    map(person => ({ type: personActions.LOAD_PERSON_SUCCESS, payload: person })),
                    catchError(() => EMPTY),
                )
            )
           
        );
}