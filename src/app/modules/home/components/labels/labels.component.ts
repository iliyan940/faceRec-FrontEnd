import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent {
  labelForm: FormGroup;
  submitted: boolean = false;
  types = [
    {
      id: 1,
      name: "Special"
    },
    {
      id: 2,
      name: "Warning"
    },
    {
      id: 3,
      name: "Suspension"
    }
  ]


  constructor(private formBuilder: FormBuilder) 
  { 
    this.labelForm = this.formBuilder.group({
      type: this.types[0],
      description: ['', [Validators.required, Validators.minLength(4)]]
    });

  }

  add(): void {
    this.submitted = true;

    if(!this.labelForm.valid) {
      return;
    }

    let newLabel = this.labelForm.value;

    console.log(newLabel);
  }

}
