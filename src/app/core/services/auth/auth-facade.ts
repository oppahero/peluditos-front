import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApi } from './auth-api';
import { LoginCredentials } from '../../interfaces/login-credentials.interface';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private router = inject(Router);
  private authApi = inject(AuthApi);

  login(credentials: LoginCredentials) {
    return this.authApi.login(credentials).pipe(
      tap((res) => {
        // 1. Guardar tokens
        // this.tokenService.setTokens(response.token, response.refreshToken);

        // // 2. Actualizar estado
        // this.authState.setUser(response.user);

        this.router.navigate(['/dashboard']);
      }),
      map(() => undefined)
    );
  }
}
