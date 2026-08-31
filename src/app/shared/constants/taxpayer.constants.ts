import { TypesOfTaxpayer } from '@app/core/enums/types-of-taxpayer.enum';
import { RegisterType } from '@app/core/enums/types-of-register.enum';

export interface TaxpayerOption {
  label: string;
  value: TypesOfTaxpayer;
  type: RegisterType;
}

export const TAXPAYER_OPTIONS: TaxpayerOption[] = [
  { label: 'Venezolano (V)', value: TypesOfTaxpayer.INDIVIDUAL, type: RegisterType.Natural },
  { label: 'Extranjero (E)', value: TypesOfTaxpayer.FOREIGNER, type: RegisterType.Natural },
  { label: 'Pasaporte (P)', value: TypesOfTaxpayer.PASSPORT, type: RegisterType.Natural },
  {
    label: 'Jurídico / Empresa (J)',
    value: TypesOfTaxpayer.COMPANY,
    type: RegisterType.LegalEntity,
  },
  {
    label: 'Gubernamental (G)',
    value: TypesOfTaxpayer.GUBERNAMENTAL,
    type: RegisterType.LegalEntity,
  },
  { label: 'Comunal (C)', value: TypesOfTaxpayer.COMMUNITIES, type: RegisterType.LegalEntity },
];
