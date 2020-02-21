import { Injectable } from "@angular/core"
import { Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Person } from 'src/app/shared/models/person.model';
import { PersonDataService } from '../services/person-data.service'
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as PersonActions from 'src/app/store/actions/persons.actions';
import { tap, first, filter } from 'rxjs/operators';
import { LoadPersonsSuccess } from 'src/app/store/actions/persons.actions';

@Injectable({
    providedIn: "root",
})
export class PersonsDataResolver implements Resolve<any> {
    constructor(private personService: PersonDataService, private store: Store<AppState>) {}

    resolve(): Observable<any> {
        // return this.personService.getAll()
        //     .pipe(
        //         tap(data => this.store.dispatch(new LoadPersonsSuccess(data)))
        //     );        


        return this.store.select('loaded').pipe(
            
            tap((data) => console.log(data)),
            first()
          );
    }
}
