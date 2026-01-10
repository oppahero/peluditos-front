import { Person } from '../../../interfaces/person.interface';

export interface NaturalPerson {
  person_id: number;
  dni: string;
  birthdate: Date;
  gender: string;
}

export type NaturalAndPerson = NaturalPerson & Person;
