import { Person } from './shared/models/person.model';

export interface AppState {
    readonly person: Person[];
}