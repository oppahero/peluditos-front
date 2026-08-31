import { TypeOfEmployee } from '@app/core/enums/types-of-employee-enum';

export interface TypesOfEmployee {
  value: TypeOfEmployee;
}

export const EMPLOYEES_OPTIONS: TypesOfEmployee[] = [
  { value: TypeOfEmployee.BIOANALIST },
  { value: TypeOfEmployee.VETERINARIAN },
];
