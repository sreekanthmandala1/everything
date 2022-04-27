import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/post-api.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http: HttpClient) { }

  postUserData(userData:Person):Observable<Person>{
    return this.http.post<Person>('https://post-api-16b69-default-rtdb.firebaseio.com/person.json',userData)
  }
}
