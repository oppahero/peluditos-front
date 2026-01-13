import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { QueryFilters } from '@app/core/interfaces/query-filters.interface';
import { computed, inject, Injectable, signal } from '@angular/core';
import { legalAndPerson } from '../interfaces/legalEntity';
import { LegalEntityApi } from './legal-entity-api';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class LegalEntityFacade {
  private legalEntityApi = inject(LegalEntityApi);
  entitiesResponse = signal<PaginatedResponse<legalAndPerson> | undefined>(undefined);
  legal = computed(() => this.entitiesResponse()?.data.items);
  loading = signal(false);

  loadEntities(params: QueryFilters) {
    this.loading.set(true);
    this.legalEntityApi
      .get(params)
      .pipe(
        catchError((error) => {
          console.error('Error al cargar persona juridica', error);
          return throwError(() => error);
        })
      )
      .subscribe((entities) => {
        this.entitiesResponse.set(entities);
        this.loading.set(false);
      });
  }
}
