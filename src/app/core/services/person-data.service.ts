import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Person } from 'src/app/shared/models/person.model';
import { Observable } from 'rxjs';
import { environment } from "@environments/environment"
import { delay, map, mapTo, tap } from 'rxjs/operators';
import { LOAD_PERSONS, LoadPersons, LoadPersonsSuccess } from 'src/app/store/actions/persons.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.apiUrl}/persons`)
      .pipe(
        delay(500),
      );
  }

  get(id): Observable<Person> {
    return this.http.get<Person>(`${environment.apiUrl}/persons/${id}`);
  }
}
