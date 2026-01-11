import { LoginCredentials } from '../interfaces/login-credentials.interface';
import { AuthApi } from 'src/app/features/auth/login/services/auth-api';
import { AuthUserStore } from '@app/core/services/auth-user-store';
import { TokenService } from '@app/core/services';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';

@Injectable()
export class AuthFacade {
  private router = inject(Router);
  private authApi = inject(AuthApi);
  private tokenService = inject(TokenService);
  private authUserStore = inject(AuthUserStore);

  login(credentials: LoginCredentials) {
    return this.authApi.auth(credentials).pipe(
      tap((res) => {
        this.tokenService.setAccessToken(res.accessToken);
        this.authUserStore.setUser(res.user);
        this.router.navigate(['/dashboard']);
      }),
      map(() => undefined)
    );
  }
}
