import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart, ResolveEnd } from '@angular/router';
import { Person } from 'src/app/shared/models/person.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as PersonActions from 'src/app/store/actions/persons.actions';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit{
  persons: Observable<Person[]>;

  constructor(private store: Store<AppState>) { 
    this.persons = store.select('persons');
  }

  ngOnInit() {
  }

}
