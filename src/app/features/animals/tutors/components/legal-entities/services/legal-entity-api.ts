import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaginatedResponse } from '@app/core/interfaces/paginated-response.interface';
import { QueryFilters } from '@app/core/interfaces/query-filters.interface';
import { environment } from '@environments/environment.development';
import { LegalEntity } from '../interfaces/legalEntity';
import { Response } from '@app/core/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class LegalEntityApi {
  private url = environment.apiUrl + '/legal-entities';
  private http = inject(HttpClient);

  get({ page, limit }: QueryFilters) {
    let params = new HttpParams();
    if (page) params = params.set('page', page);
    if (limit) params = params.set('limit', limit);

    return this.http.get<PaginatedResponse<LegalEntity>>(this.url, { params });
  }

  register(data: LegalEntity) {
    return this.http.post<Response<LegalEntity>>(this.url, data);
  }
}
