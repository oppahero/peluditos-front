import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _visible = new BehaviorSubject<boolean>(true);
  visible$ = this._visible.asObservable();

  toggle() {
    this._visible.next(!this._visible.value);
  }

  setVisible(value: boolean) {
    this._visible.next(value);
  }
}
