import { environment } from '../../../environments/environment.development';
import { LoginResponse } from '../interfaces/login-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  url!: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl + '/auth';
  }

  login(data: { username: string; password: string }): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.url}/login`, data);
  }
}
