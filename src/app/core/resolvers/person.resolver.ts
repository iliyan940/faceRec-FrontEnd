import { Injectable } from "@angular/core"
import { Resolve, ActivatedRouteSnapshot } from "@angular/router"
import { Observable, of } from "rxjs"
import { Person } from 'src/app/shared/models/person.model';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as PersonActions from 'src/app/store/actions/persons.actions';
import { take, tap, delay, flatMap, map, filter, mergeMap } from 'rxjs/operators';
import * as fromApp from '@my-store/reducers/index';
import { Label } from 'src/app/shared/models/label.model';
import { LoadLabels } from '@my-store/actions/labels.action';

@Injectable({
    providedIn: "root",
})
export class PersonDataResolver implements Resolve<Person[]> {

    constructor(
        private store: Store<fromApp.AppState>,
        private actions: Actions
    ) {}

    resolve(route: ActivatedRouteSnapshot): any {
        let id = route.params.id;

        let personLoaded;
        let labelsLoaded;

        this.store.subscribe((store) => {
            personLoaded = store.persons.persons.filter((person: Person) => {
                return person.id == id;
            })[0];

            labelsLoaded = store.labels.labels.filter((label: Label) => {
                return label.id == id;
            }).length > 0  ? true : false;

        }).unsubscribe();


        if(typeof personLoaded != "undefined") {
            this.store.dispatch(new PersonActions.LoadPersonSuccess(personLoaded));
        } else {
            this.store.dispatch(new PersonActions.LoadPerson(id));
        }

        if(!labelsLoaded) {
            this.store.dispatch(new LoadLabels());
        } 

        return this.store.pipe(
        map(function(s){
            if(Object.keys(s.persons.activePerson).length > 0 && s.labels.labels.length > 0) {
                return true;
            } 
        }),
        filter(result => result == true),
        take(1)
        )
    }

}
