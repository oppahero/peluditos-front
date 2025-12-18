import { User } from '../interfaces/user.interface';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthUserStore {
  private currentUser = signal<User | null>(null);

  setUser(user: User) {
    this.currentUser.set(user);
  }

  getUser() {
    return this.currentUser();
  }

  clearUser() {
    this.currentUser.set(null);
  }
}
