import { Injectable } from '@angular/core';
import { User } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() { }
}
