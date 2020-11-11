import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { USERS } from '../data/user.data';

@Injectable()
export class UserService {
  provideUser(): any[] {
    throw new Error('Method not implemented.');
  }

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  fetchUsers(): Observable<any> {
    return of(USERS);
  }
}