import { Injectable } from "@angular/core"
import { Resolve, ActivatedRouteSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { Person } from 'src/app/shared/models/person.model';
import { Actions, ofType } from '@ngrx/effects';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import * as PersonActions from 'src/app/store/actions/persons.actions';
import { take, tap } from 'rxjs/operators';


@Injectable({
    providedIn: "root",
})
export class PersonDataResolver implements Resolve<Person> {

    constructor(
        private store: Store<AppState>,
        private actions: Actions
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Person> {
        let id = route.params.id;
        this.store.dispatch(new PersonActions.LoadPerson(id));
        
        return this.actions.pipe(
            ofType(PersonActions.LOAD_PERSON_SUCCESS),
            take(1)
        );
    }

}
