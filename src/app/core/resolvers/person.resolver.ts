import { Injectable } from "@angular/core"
import { Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Person } from 'src/app/shared/models/person.model';
import { PersonDataService } from '../services/person-data.service'

@Injectable({
    providedIn: "root",
})
export class PersonDataResolver implements Resolve<Person[]> {
    constructor(private personService: PersonDataService) {}

    resolve(): Observable<Person[]> {
        return this.personService.getAll()
    }
}
