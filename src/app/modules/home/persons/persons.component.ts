import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart, ResolveEnd } from '@angular/router';
import { Person } from 'src/app/shared/models/person.model';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  routerEvent$;
  persons: Person[] = this.route.snapshot.data.persons;
  loading: boolean;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }


}
