import { Person } from '../../../interfaces/person.interface';

export interface LegalEntity {
  person: Person;
  person_id: number;
  rif: string;
}
