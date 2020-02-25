import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {
  person: Person;
  editMode: boolean = false;

  constructor(private store: Store<AppState>) {
    store.select(state => state.persons.activePerson).subscribe(person => {
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

}
