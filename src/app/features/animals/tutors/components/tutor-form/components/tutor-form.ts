import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TAXPAYER_OPTIONS } from '@app/shared/constants/taxpayer.constants';
import { ChangeDetectionStrategy, Component, inject, input, model, OnInit } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Dialog } from '@app/shared/ui/dialog/dialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { TypesOfTaxpayer } from '@app/core/enums/types-of-taxpayer.enum';
import { EMPLOYEES_OPTIONS } from '@app/shared/constants/employee.constants';
import { REGISTER_OPTIONS } from '@app/shared/constants/type-of-register.constants';
import { TaxpayerOption } from '@app/shared/constants/taxpayer.constants';
import { RegisterType } from '@app/core/enums/types-of-register.enum';
import { AREACODE_OPTIONS } from '@app/shared/constants/area-code.constants';
import { PersonFacade } from '../services/person-facade';
import { Response } from '@app/core/interfaces/response.interface';

@Component({
  selector: 'app-tutor-form',
  standalone: true,
  templateUrl: './tutor-form.html',
  imports: [
    Dialog,
    CardModule,
    SelectModule,
    CommonModule,
    InputTextModule,
    InputGroupModule,
    RadioButtonModule,
    ReactiveFormsModule,
    ButtonModule,
    DatePickerModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PersonFacade],
})
export class TutorForm implements OnInit {
  private personFacade = inject(PersonFacade);

  mainForm!: FormGroup;
  showForm = model<boolean>(true);
  title = input<string>('');
  isTutorForm = model<boolean>(true);

  readonly RegisterType = RegisterType;
  formTypeSelected = RegisterType.Natural;

  taxpayerTypes!: TaxpayerOption[];
  readonly employees = EMPLOYEES_OPTIONS;
  readonly formTypes = REGISTER_OPTIONS;
  readonly areaCodes = AREACODE_OPTIONS;

  dialogBreakpoints = {
    '960px': '90vw',
    '640px': '85vw',
    '480px': '90vw',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.onOptionChange(this.formTypeSelected);
    this.setTaxpayer();
  }

  initForm() {
    this.mainForm = this.fb.group({
      person: this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(30)]],
        areaCode: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.minLength(7)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
        address: ['', [Validators.required, Validators.maxLength(30)]],
        taxpayer_type: [TypesOfTaxpayer.INDIVIDUAL, [Validators.required]],
      }),
    });
  }

  private get naturalGroup(): FormGroup {
    return this.fb.group({
      dni: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(9)]],
      birthdate: ['', [Validators.required]],
      gender: ['F', [Validators.required]],
    });
  }

  private get entityGroup(): FormGroup {
    return this.fb.group({
      rif: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }

  private get employeeGroup(): FormGroup {
    return this.fb.group({
      type_of_employee: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      ],
    });
  }

  get f() {
    return this.mainForm.controls;
  }

  onOptionChange(option: RegisterType): void {
    if (option === RegisterType.Natural) {
      if (this.mainForm.contains('entity')) this.mainForm.removeControl('entity');
      if (this.mainForm.contains('employee')) this.mainForm.removeControl('employee');

      if (!this.mainForm.contains('natural'))
        this.mainForm.addControl('natural', this.naturalGroup);
    }

    if (option === RegisterType.LegalEntity) {
      if (this.mainForm.contains('natural')) this.mainForm.removeControl('natural');
      if (this.mainForm.contains('employee')) this.mainForm.removeControl('employee');

      if (!this.mainForm.contains('entity')) this.mainForm.addControl('entity', this.entityGroup);
    }

    if (option === RegisterType.Employee) {
      if (this.mainForm.contains('natural')) this.mainForm.removeControl('natural');
      if (this.mainForm.contains('entity')) this.mainForm.removeControl('entity');

      if (!this.mainForm.contains('employee'))
        this.mainForm.addControl('employee', this.employeeGroup);
    }
  }

  setTaxpayer() {
    this.taxpayerTypes = TAXPAYER_OPTIONS.filter((i) => i.type === this.formTypeSelected);
    const firstRecord = this.taxpayerTypes[0];
    this.mainForm.patchValue({
      person: {
        taxpayer_type: firstRecord.value,
      },
    });
  }

  private _buildPayloadByType(type: RegisterType) {
    const personData = this.mainForm.value.person;
    const naturalData = this.mainForm.value.natural;
    const entityData = this.mainForm.value.entity;

    const data = type === RegisterType.Natural ? naturalData : entityData;
    const { areaCode, ...restPerson } = personData;

    return {
      person: {
        ...restPerson,
        phone: personData.areaCode + personData.phone,
      },
      ...data,
    };
  }

  private get _handleApiResponse() {
    return {
      next: (res: Response<any>) => {
        if (res.success) {
          // this.messageService.add({ severity: 'success', summary: 'Éxito', detail: res.message });
          this.showForm.apply(false);
        }
      },
      error: (err: any) => {
        const errorMessage = err.message || 'Ocurrió un error al registrar';
        console.log('el error', errorMessage);
        // this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
      },
    };
  }

  onSubmit(): void {
    const personData = this.mainForm.value.person;
    const naturalData = this.mainForm.value.natural;
    console.log('Persona:', personData);
    console.log('Natural:', naturalData);

    if (this.mainForm.valid) {
      const type = this.formTypeSelected;
      const payload = this._buildPayloadByType(type);
      console.log('envio', payload);
      this.personFacade.register(type, payload).subscribe(this._handleApiResponse);
    } else {
      this.mainForm.markAllAsTouched();
    }
  }

  onModalClosed(): void {
    this.formTypeSelected = RegisterType.Natural;
    this.initForm();
    this.onOptionChange(this.formTypeSelected);
    this.setTaxpayer();
  }
}
