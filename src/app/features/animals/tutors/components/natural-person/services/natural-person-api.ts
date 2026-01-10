import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { environment } from '@environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NaturalAndPerson } from '../interfaces/naturalPerson';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NaturalPersonApi {
  private url = environment.apiUrl + '/natural-persons';
  private http = inject(HttpClient);

  get({ page, limit }: { page: number; limit: number }) {
    let params = new HttpParams();
    if (page) params = params.set('page', page);
    if (limit) params = params.set('limit', limit);

    return this.http.get<PaginatedResponse<NaturalAndPerson>>(this.url, { params });
  }
}
