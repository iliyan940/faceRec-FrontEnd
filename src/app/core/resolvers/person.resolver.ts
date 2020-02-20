import { Injectable } from "@angular/core"
import { Resolve, ActivatedRouteSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { Person } from 'src/app/shared/models/person.model';
import { PersonDataService } from '../services/person-data.service';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: "root",
})
export class PersonDataResolver implements Resolve<Person> {

    constructor(private personService: PersonDataService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Person> {
        let id = route.params.id;
        return this.personService.get(id).pipe(first());
    }

}
