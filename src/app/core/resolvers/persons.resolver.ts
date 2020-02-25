import { Injectable } from "@angular/core"
import { Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as PersonActions from 'src/app/store/actions/persons.actions';
import { take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';

@Injectable({
    providedIn: "root",
})
export class PersonsDataResolver implements Resolve<any> {

    constructor(
        private store: Store<AppState>,
        private actions: Actions
        ) {}

    resolve(): Observable<any> {
        this.store.dispatch(new PersonActions.LoadPersons());

        return this.actions.pipe(
            ofType(PersonActions.LOAD_PERSONS_SUCCESS),
            take(1)
        );
    }
}
