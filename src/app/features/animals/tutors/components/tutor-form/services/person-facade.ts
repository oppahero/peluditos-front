import { NaturalPersonApi } from '../../natural-person/services/natural-person-api';
import { LegalEntityApi } from '../../legal-entities/services/legal-entity-api';
import { RegisterType } from '@app/core/enums/types-of-register.enum';
import { catchError, Observable, throwError } from 'rxjs';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class PersonFacade {
  private naturalPersonApi = inject(NaturalPersonApi);
  private legalEntityApi = inject(LegalEntityApi);

  register(type: RegisterType, payload: any): Observable<any> {
    let request$: Observable<any>;

    switch (type) {
      case RegisterType.Natural:
        request$ = this.naturalPersonApi.register(payload);
        break;
      case RegisterType.LegalEntity:
        request$ = this.legalEntityApi.register(payload);
        break;
      // case RegisterType.Employee:
      //   request$ = this.employeeApi.register(payload);
      //   break;
      default:
        return throwError(() => new Error('Tipo de registro no válido'));
    }

    return request$.pipe(
      catchError((error) => {
        console.error(`Error en registro (${type}):`, error);
        return throwError(() => error);
      }),
    );
  }
}
