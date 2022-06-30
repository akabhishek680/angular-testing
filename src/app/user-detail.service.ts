import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http: HttpClient) { }

  getUserDetail = ():Observable<Object>=> {

    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
