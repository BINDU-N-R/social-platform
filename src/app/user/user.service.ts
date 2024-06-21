import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {id: 1, name: "Can Yaman"},
    {id: 2, name: "Sanem Yaman"}
  ]

  constructor() { }

  getUsers(){
    return of(this.users)
  }
}
