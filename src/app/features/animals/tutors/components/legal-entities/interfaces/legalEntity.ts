import { Person } from '../../../interfaces/person.interface';

export interface LegalEntity {
  person_id: number;
  rif: string;
}

export type legalAndPerson = LegalEntity & Person;
