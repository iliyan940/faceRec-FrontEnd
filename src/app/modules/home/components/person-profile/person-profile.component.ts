import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { Store } from '@ngrx/store';
import * as fromApp from '@my-store/reducers/index';
import { Subscription } from 'rxjs';
import * as PersonActions from 'src/app/store/actions/persons.actions';
import { Label } from 'src/app/shared/models/label.model';
import { FormGroup, FormBuilder, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit, OnDestroy {

  personForm: FormGroup;
  labelsForm: FormGroup;
  person: Person;
  editMode: boolean = false;
  storeSubscription: Subscription = new Subscription();

  constructor(private store: Store<fromApp.AppState>, private fb: FormBuilder) {}
  
  ngOnInit() {
    let subscription = this.store.select(state => state).subscribe((state: fromApp.AppState) => {

      this.person = state.persons.activePerson;

      this.person.labels.forEach( (label: Label) => {
        label.name = state.labels.labels[label.id-1].name
      });

      this.personForm = this.fb.group({
        name: [{ value: state.persons.activePerson.name, disabled: true }],
        gender: [{ value: state.persons.activePerson.gender, disabled: true }],
        age: [{ value: state.persons.activePerson.age, disabled: true }],
        facebook: [{ value: state.persons.activePerson.facebook, disabled: true }],


        labels: this.setLabels(this.person.labels)
      });

    });

    this.storeSubscription.add(subscription);
  }

  setLabels(labels): FormArray {
    const formArray = new FormArray([]);

    labels.forEach(function(label){

      let formGroup = this.fb.group({
         name: label.name,
         description: label.description
      });

      formArray.push(formGroup);
    }, this);

    return formArray;
  }

  get labels() {
    // console.log( this.personForm.get('labels'))
    return this.personForm.get('labels') as FormArray;
  }

  turnEditModeOn(): void {

    for (const field in this.personForm.controls) { 
      const control = this.personForm.get(field); 

      if(this.editMode == true) {
        control.disable();
      } else {
        control.enable();
      }
      
    }
    
    this.editMode = !this.editMode;
  }

  get labelsCount(): number {
    return Object.keys(this.person.labels).length;
  }

  updateLabel(labelId) {


  }

  deleteLabel(id, index) {
    //todo declate type
      this.store.dispatch(new PersonActions.DeleteLabel(id, index))
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
