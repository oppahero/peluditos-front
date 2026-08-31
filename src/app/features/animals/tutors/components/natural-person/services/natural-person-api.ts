import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { environment } from '@environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { QueryFilters } from '@app/core/interfaces/query-filters.interface';
import { Response } from '@app/core/interfaces/response.interface';
import { NaturalPerson } from '../interfaces/naturalPerson';

@Injectable({
  providedIn: 'root',
})
export class NaturalPersonApi {
  private url = environment.apiUrl + '/natural-persons';
  private http = inject(HttpClient);

  get({ page, limit }: QueryFilters) {
    let params = new HttpParams();
    if (page) params = params.set('page', page);
    if (limit) params = params.set('limit', limit);

    return this.http.get<PaginatedResponse<NaturalPerson>>(this.url, { params });
  }

  register(data: NaturalPerson) {
    return this.http.post<Response<NaturalPerson>>(this.url, data);
  }
}
