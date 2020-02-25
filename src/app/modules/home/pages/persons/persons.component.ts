import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit{
  persons: Observable<Person[]>;

  constructor(private store: Store<AppState>) { 
    this.persons = store.select(state => state.persons.persons);
  }

  ngOnInit() {
  }

}
