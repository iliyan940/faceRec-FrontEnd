import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {
  person: Person = this.route.snapshot.data.person;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  turnEditModeOn(): void {
    this.editMode = !this.editMode;
  }

}
