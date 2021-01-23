import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/Post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {}

  getAllPost(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://jsonplaceholder.typicode.com/posts')

  }

}