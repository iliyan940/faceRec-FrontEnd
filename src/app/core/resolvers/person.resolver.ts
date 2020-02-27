import { Injectable } from "@angular/core"
import { Resolve, ActivatedRouteSnapshot } from "@angular/router"
import { Observable, merge } from "rxjs"
import { Person } from 'src/app/shared/models/person.model';
import { Actions, ofType } from '@ngrx/effects';
import { AppState } from 'src/app/store/app.state';
import { Store, select } from '@ngrx/store';
import * as PersonActions from 'src/app/store/actions/persons.actions';
import { take, tap, mergeMap } from 'rxjs/operators';
import { PersonsEffects } from 'src/app/store/effects/persons.effects';


@Injectable({
    providedIn: "root",
})
export class PersonDataResolver implements Resolve<Person[]> {

    constructor(
        private store: Store<AppState>,
        private actions: Actions
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Person[]> {
        let id = route.params.id;

        let alreadyLoaded;
        let requestedPerson;
        
        this.store.select('persons').subscribe((persons) => {
            if(persons.persons) {
                persons.persons.forEach((person) => {
                    if(person.id == id) {
                        alreadyLoaded = true;
                        requestedPerson = person;
                    }
                });
            }
        }).unsubscribe();
        
        if(alreadyLoaded) {
            this.store.dispatch(new PersonActions.LoadPersonSuccess(requestedPerson));
            return this.store.select(state => state.persons.persons).pipe(take(1));
        } else {
            this.store.dispatch(new PersonActions.LoadPerson(id));
    
            return this.actions.pipe(
                ofType(PersonActions.LOAD_PERSON_SUCCESS),
                take(1)
            );
        }

    }

}
