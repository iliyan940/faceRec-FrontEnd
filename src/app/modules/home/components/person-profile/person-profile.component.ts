import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { Store } from '@ngrx/store';
import * as fromApp from '@my-store/reducers/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit, OnDestroy {
  person: Person;
  editMode: boolean = false;
  storeSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
    this.storeSubscription = store.select(state => state.persons.activePerson).subscribe((person: Person) => {
      this.person = person
    });
  }
  
  ngOnInit() {

  }

  turnEditModeOn(): void {
    this.editMode = !this.editMode;
  }

  get labelsCount(): number {
    return Object.keys(this.person.labels).length;
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
