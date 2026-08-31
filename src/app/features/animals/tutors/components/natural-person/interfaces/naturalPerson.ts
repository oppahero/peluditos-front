import { Person } from '../../../interfaces/person.interface';

export interface NaturalPerson {
  person: Person;
  dni: string;
  birthdate: Date;
  gender: string;
}
