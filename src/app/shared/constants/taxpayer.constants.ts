import { TypesOfTaxpayer } from '@app/core/enums/types-of-taxpayer.enum';

export interface TaxpayerOption {
  label: string;
  value: TypesOfTaxpayer;
}

export const TAXPAYER_OPTIONS: TaxpayerOption[] = [
  { label: 'Venezolano (V)', value: TypesOfTaxpayer.INDIVIDUAL },
  { label: 'Extranjero (E)', value: TypesOfTaxpayer.FOREIGNER },
  { label: 'Pasaporte (P)', value: TypesOfTaxpayer.PASSPORT },
  { label: 'Jurídico / Empresa (J)', value: TypesOfTaxpayer.COMPANY },
  { label: 'Gubernamental (G)', value: TypesOfTaxpayer.GUBERNAMENTAL },
  { label: 'Comunal (C)', value: TypesOfTaxpayer.COMMUNITIES },
];
