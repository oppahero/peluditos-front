import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token!: string;

  set(token: string) {
    this.token = token;
  }

  get(): string | null {
    return this.token;
  }
}
