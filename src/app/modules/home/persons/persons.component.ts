import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart, ResolveEnd } from '@angular/router';
import { Person } from 'src/app/shared/models/person.model';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  persons: Person[] = this.route.snapshot.data.persons;

  constructor(
    private route: ActivatedRoute,
    ) { }



}
