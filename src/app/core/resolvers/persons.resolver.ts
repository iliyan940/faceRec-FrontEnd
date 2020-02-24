import { Injectable } from "@angular/core"
import { Resolve } from "@angular/router"
import { Observable, pipe } from "rxjs"
import { Person } from 'src/app/shared/models/person.model';
import { PersonDataService } from '../services/person-data.service'
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as PersonActions from 'src/app/store/actions/persons.actions';
import { tap, first, filter, delay, map, take, mergeMap, switchMap } from 'rxjs/operators';
import { LoadPersonsSuccess } from 'src/app/store/actions/persons.actions';
import { Actions, ofType } from '@ngrx/effects';

@Injectable({
    providedIn: "root",
})
export class PersonsDataResolver implements Resolve<any> {

     isLoaded$ = this.store.pipe(
         select('persons'),
         map(persons => persons.length > 0)
     );

    constructor(
        private personService: PersonDataService, 
        private store: Store<AppState>,
        private actions: Actions
        ) {}

    resolve(): Observable<any> {
        this.store.select('persons').pipe(take(1)).subscribe(p => {
            this.store.dispatch(new PersonActions.LoadPersons());
        });
       
        return this.actions.pipe(
            ofType(PersonActions.LOAD_PERSONS_SUCCESS),
            take(1)
        );
    }
}
