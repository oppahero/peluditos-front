import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token!: string;

  setAccessToken(token: string) {
    this.token = token;
  }

  getAccessToken(): string | null {
    return this.token;
  }
}
