import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { environment } from '@environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetsApi {
  private url = environment.apiUrl + '/pets';
  private http = inject(HttpClient);

  get({ page, limit }: { page: number; limit: number }): Observable<PaginatedResponse<Pet>> {
    let params = new HttpParams();
    if (page) params = params.set('page', page);
    if (limit) params = params.set('limit', limit);

    return this.http.get<PaginatedResponse<Pet>>(this.url, { params });
  }
}
