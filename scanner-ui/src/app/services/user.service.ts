import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../types';

const USERS: User[] = [
  {
    id: 'USER1',
    name: 'Alice',
  },
  {
    id: 'USER2',
    name: 'Bob',
  }
]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {
    return of(USERS);
  }

  getUser(id: string) {
    return of(USERS.find(user => user.id === id)!);
  }
  
}
