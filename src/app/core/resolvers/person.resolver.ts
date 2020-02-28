import { Injectable } from "@angular/core"
import { Resolve, ActivatedRouteSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { Person } from 'src/app/shared/models/person.model';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as PersonActions from 'src/app/store/actions/persons.actions';
import { take } from 'rxjs/operators';
import * as fromApp from '@my-store/reducers/index';

@Injectable({
    providedIn: "root",
})
export class PersonDataResolver implements Resolve<Person[]> {

    constructor(
        private store: Store<fromApp.AppState>,
        private actions: Actions
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Person[]> {
        let id = route.params.id;

        let alreadyLoaded;
        let requestedPerson;
        
        this.store.select('persons').subscribe((persons) => {
            if(persons.persons) {
                persons.persons.forEach((person: Person) => {
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
