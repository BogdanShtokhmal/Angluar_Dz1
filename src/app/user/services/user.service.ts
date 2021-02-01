import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUser(): Observable <any[]>{
    return this.httpClient.get<any[]>('http://jsonplaceholder.typicode.com/users');
}
}
