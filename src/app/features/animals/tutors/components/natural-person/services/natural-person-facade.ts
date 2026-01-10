import { computed, inject, Injectable, signal } from '@angular/core';
import { NaturalPersonApi } from './natural-person-api';
import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { NaturalAndPerson } from '../interfaces/naturalPerson';

@Injectable()
export class NaturalPersonFacade {
  private naturalPersonApi = inject(NaturalPersonApi);
  personsResponse = signal<PaginatedResponse<NaturalAndPerson> | undefined>(undefined);
  natural = computed(() => this.personsResponse()?.data.items);
  isLoading = signal(false);

  loadPersons(params: { page: number; limit: number }) {
    this.isLoading.set(true);
    this.naturalPersonApi.get(params).subscribe((persons) => {
      this.personsResponse.set(persons);
      this.isLoading.set(false);
    });
  }
}
