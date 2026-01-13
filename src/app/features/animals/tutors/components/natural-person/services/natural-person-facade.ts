import { computed, inject, Injectable, signal } from '@angular/core';
import { NaturalPersonApi } from './natural-person-api';
import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { NaturalAndPerson } from '../interfaces/naturalPerson';
import { catchError, throwError } from 'rxjs';
import { QueryFilters } from '@app/core/interfaces/query-filters.interface';

@Injectable()
export class NaturalPersonFacade {
  private naturalPersonApi = inject(NaturalPersonApi);
  personsResponse = signal<PaginatedResponse<NaturalAndPerson> | undefined>(undefined);
  natural = computed(() => this.personsResponse()?.data.items);
  isLoading = signal(false);

  loadPersons(params: QueryFilters) {
    this.isLoading.set(true);
    this.naturalPersonApi
      .get(params)
      .pipe(
        catchError((error) => {
          console.error('Error al cargar personas naturales', error);
          return throwError(() => error);
        })
      )
      .subscribe((persons) => {
        this.personsResponse.set(persons);
        this.isLoading.set(false);
      });
  }
}
