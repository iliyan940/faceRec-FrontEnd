import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Person } from 'src/app/shared/models/person.model';
import { Observable } from 'rxjs';
import { environment } from "@environments/environment"

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.apiUrl}/persons`);
  }

  get(id): Observable<Person> {
    return this.http.get<Person>(`${environment.apiUrl}/persons/${id}`);
  }
}
