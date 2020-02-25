import { Person } from '../shared/models/person.model';

export interface AppState {
    readonly persons: {
        persons: Person[],
        activePerson: Person
    }
}