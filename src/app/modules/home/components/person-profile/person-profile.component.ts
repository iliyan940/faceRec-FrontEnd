import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { Store } from '@ngrx/store';
import * as fromApp from '@my-store/reducers/index';
import { Subscription } from 'rxjs';
import * as PersonActions from 'src/app/store/actions/persons.actions';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit, OnDestroy {
  person: Person;
  editMode: boolean = false;
  storeSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}
  
  ngOnInit() {
    this.storeSubscription = this.store.select(fromApp.getActivePerson).subscribe((person: Person) => {
      this.person = person
    });
  }

  turnEditModeOn(): void {
    this.editMode = !this.editMode;
  }

  get labelsCount(): number {
    return Object.keys(this.person.labels).length;
  }

  deleteLabel(id, index) {
    //todo declate type
      this.store.dispatch(new PersonActions.DeleteLabel(id, index))
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
