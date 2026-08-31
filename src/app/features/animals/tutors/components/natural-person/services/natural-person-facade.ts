import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { QueryFilters } from '@app/core/interfaces/query-filters.interface';
import { computed, inject, Injectable, signal } from '@angular/core';
import { NaturalPerson } from '../interfaces/naturalPerson';
import { NaturalPersonApi } from './natural-person-api';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ResizableColumn } from 'primeng/table';
import { Response } from '@app/core/interfaces/response.interface';

@Injectable()
export class NaturalPersonFacade {
  private naturalPersonApi = inject(NaturalPersonApi);
  personsResponse = signal<PaginatedResponse<NaturalPerson> | undefined>(undefined);
  natural = computed(() => this.personsResponse()?.data.items);

  pageInfo = computed(() => {
    const data = this.personsResponse()?.data;

    return data
      ? { page: data.page, limit: data.limit, lastPage: data.lastPage, total: data.total }
      : null;
  });

  isLoading = signal(false);

  loadPersons(params: QueryFilters) {
    this.isLoading.set(true);
    this.naturalPersonApi
      .get(params)
      .pipe(
        catchError((error) => {
          console.error('Error al cargar personas naturales', error);
          return throwError(() => error);
        }),
      )
      .subscribe((persons) => {
        console.log('persons', persons);
        this.personsResponse.set(persons);
        this.isLoading.set(false);
      });
  }
}
