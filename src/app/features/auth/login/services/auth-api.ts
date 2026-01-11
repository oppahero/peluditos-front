import { LoginCredentials } from '../interfaces/login-credentials.interface';
import { AuthResponse } from '@app/core/interfaces/auth-response.interface';
import { environment } from '@environments/environment.development';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenService } from '@app/core/services';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private url = environment.apiUrl + '/auth';
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  auth(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.url}/login`, credentials, { withCredentials: true })
      .pipe(
        catchError((err) => {
          return throwError(() => new Error(err?.detail ?? 'Error inesperado'));
        })
      );
  }

  refreshToken() {
    return this.http
      .post<{ accessToken: string }>(`${this.url}/refresh`, null, { withCredentials: true })
      .pipe(tap((res) => this.tokenService.setAccessToken(res.accessToken)));
  }
}
