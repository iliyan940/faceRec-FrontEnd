import { Person } from '../shared/models/person.model';

export interface AppState {
    readonly persons: Person[];
    readonly loaded: boolean
}