import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabelService } from 'src/app/core/services/label.service';
import { Label } from 'src/app/shared/models/label.model';
import { Store } from '@ngrx/store';
import * as fromApp from '@my-store/reducers/index';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit{
  labelForm: FormGroup;
  submitted: boolean = false;
  labels: Label[];
  loaded: boolean = false;

  constructor(private formBuilder: FormBuilder, private labelService: LabelService, private store: Store<fromApp.AppState>){}

  ngOnInit() {
    // this.store.dispatch();

    this.store.select(state => state.labels).subscribe(labels => {
      this.labels = labels;

      this.labelForm = this.formBuilder.group({
        type: this.labels[0],
        description: ['', [Validators.required, Validators.minLength(4)]]
      });

      this.loaded = true;
    });

    // this.labelService.getAll().subscribe((labels) => {
    //   this.labels = labels;

    //   this.labelForm = this.formBuilder.group({
    //     type: this.labels[0],
    //     description: ['', [Validators.required, Validators.minLength(4)]]
    //   });

    //   this.loaded = true;
    // })
  }

  add(): void {
    this.submitted = true;

    if(!this.labelForm.valid) {
      return;
    }

    let newLabel = this.labelForm.value;
  }

  

}
