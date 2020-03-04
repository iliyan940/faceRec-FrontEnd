import * as labelsAction from '../actions/labels.action';
import { Label } from '../../shared/models/label.model';

export interface State {
    labels: Label[],
}
  
const initialState: State = {
    labels: []
};

export function reducer(state = initialState, action: labelsAction.Actions) {
    switch(action.type) {
        case labelsAction.LOAD_LABELS: {
            return {
                ...state
            }
        }
        case labelsAction.LOAD_LABELS_SUCCESS: {
            return {
                ...state,
                labels: action.payload
            }
        }
        default:
            return state;
    }
}