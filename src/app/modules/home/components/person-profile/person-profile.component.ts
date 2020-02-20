import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {
  person: Person;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute) {
    route.data.subscribe(
      data => this.person = data['person']
    );
   }

  ngOnInit() {
    console.log(this.person)
  }

  turnEditModeOn(): void {
    this.editMode = !this.editMode;
    console.log(this.person)
  }

  get labelsCount(): number {
    return Object.keys(this.person.labels).length;
  }

}
