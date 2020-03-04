import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabelService } from 'src/app/core/services/label.service';
import { Label } from 'src/app/shared/models/label.model';
import { Store } from '@ngrx/store';
import * as fromApp from '@my-store/reducers/index';
import { LoadLabels } from '@my-store/actions/labels.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit, OnDestroy{
  labelForm: FormGroup;
  submitted: boolean = false;
  labels: Label[] = [];
  loaded: boolean = false;
  subscriptions = new Subscription();

  constructor(private formBuilder: FormBuilder, private labelService: LabelService, private store: Store<fromApp.AppState>){}

  ngOnInit() {

    let subscription = this.store.select(state => state.labels.labels).subscribe(labels => {
      if(labels.length > 0) {

        this.labels = labels;
        
        this.labelForm = this.formBuilder.group({
          type: this.labels[0],
          description: ['', [Validators.required, Validators.minLength(4)]]
        });

        this.loaded = true;
      } else {
        this.store.dispatch(new LoadLabels());
      }

    });

    this.subscriptions.add(subscription)
  }

  add(): void {
    this.submitted = true;

    if(!this.labelForm.valid) {
      return;
    }

    let newLabel = this.labelForm.value;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
