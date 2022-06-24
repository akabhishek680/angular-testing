import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private userInfo = {
    name: 'Abhishek',
    age: 25,
    address: 'New Delhi'
  }

  constructor() { }

  getDataFromServer = ():any => {
    return this.userInfo;
  }
}
