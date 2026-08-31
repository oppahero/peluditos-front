import { RegisterType } from '@app/core/enums/types-of-register.enum';

export interface TypesOfRegister {
  value: RegisterType;
  label: string;
}

export const REGISTER_OPTIONS: TypesOfRegister[] = [
  { value: RegisterType.Natural, label: 'Natural' },
  { value: RegisterType.LegalEntity, label: 'Entidad legal' },
];
