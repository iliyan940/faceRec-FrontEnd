import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Person } from 'src/app/shared/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'faceRec';
  routerEvent$;
  persons: Person[] = this.route.snapshot.data.persons;
  loaded: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
     }

  ngOnInit() {
     this.routerEvent$ = this.router.events
    .subscribe( (e) => {
      if(e instanceof NavigationStart) {
        this.loaded = false;
      }
      if(e instanceof NavigationEnd) {
        this.loaded = true;
      }
    });
  }
  
  ngOnDestroy() {
    this.routerEvent$.unsubscribe();
  }
}
