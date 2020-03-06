import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { Observable } from 'rxjs';
import * as fromApp from '@my-store/reducers/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit{
  persons: Observable<Person[]>;

  constructor(private store: Store<fromApp.AppState>) { 
    this.persons = store.select(fromApp.getPersons);
  }

  ngOnInit() {
  }

}
