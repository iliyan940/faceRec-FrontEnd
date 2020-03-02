import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects'; 
import * as labelActions from '../actions/labels.action';
import { LabelService } from '../../core/services/label.service'
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class LabelsEffects {
    constructor(private actions$: Actions, private labelService: LabelService) {}

    @Effect()
    loadPersons$ = this.actions$
        .pipe(
            ofType(labelActions.LOAD_LABELS),
            mergeMap(() => this.labelService.getAll()
                .pipe(
                    map(labels => ({ type: labelActions.LOAD_LABELS_SUCCESS, payload: labels })),
                    catchError(() => EMPTY)
                )
            )
        )
}