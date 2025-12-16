import { environment } from '../../../../environments/environment.development';
import { AuthResponse } from '../../interfaces/auth-response.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginCredentials } from '../../interfaces/login-credentials.interface';

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
