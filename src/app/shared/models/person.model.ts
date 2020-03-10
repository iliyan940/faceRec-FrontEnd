import { Label } from './label.model'

export class Person {
    id: number
    name: string
    gender: string
    age: number
    apartment: string
    tenant: boolean
    facebook: string
    labels: Label[]
}
