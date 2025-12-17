import { LoginCredentials } from '../interfaces/login-credentials.interface';
import { AuthResponse } from '@app/core/interfaces/auth-response.interface';
import { environment } from '@environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private url = environment.apiUrl + '/auth';
  private http = inject(HttpClient);

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.url}/login`, credentials).pipe(
      catchError((err) => {
        return throwError(() => new Error(err?.detail ?? 'Error inesperado'));
      })
    );
  }
}
