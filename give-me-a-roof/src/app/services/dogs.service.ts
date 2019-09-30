import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs: Dog[];

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(environment.apiUrl);
  }

  createDog(data: Dog): Observable<Dog> {
    return this.http.post<Dog>(environment.apiUrl, data);
  }
}
