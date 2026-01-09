import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Pet } from '../interfaces/pet.interface';
import { catchError, throwError } from 'rxjs';
import { PetsApi } from './pets-api';

@Injectable()
export class PetsFacade {
  private petsApi = inject(PetsApi);
  petsResponse = signal<PaginatedResponse<Pet> | undefined>(undefined);
  pets = computed(() => this.petsResponse()?.data.items);
  isLoading = signal(false);

  loadPets(params: { page: number; limit: number }) {
    this.isLoading.set(true);
    this.petsApi
      .get(params)
      .pipe(
        catchError((error) => {
          console.error('Error al cargar mascotas', error);
          return throwError(() => error);
        })
      )
      .subscribe((pets) => this.petsResponse.set(pets));
  }
}
