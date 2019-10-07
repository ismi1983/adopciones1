import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog';
import { DogsResponse } from '../models/dogs-response';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<DogsResponse> {
    return this.http.get<DogsResponse>(`${environment.apiUrl}/dogs`);
  }

  createDog(data: Dog): Observable<DogsResponse> {
    data.age = +data.age;
    return this.http.post<DogsResponse>(`${environment.apiUrl}/dogs/add`, data);
  }

  deleteDog(id: number): Observable<DogsResponse> {
    const url = `${environment.apiUrl}/dogs/${id}`;
    return this.http.delete<DogsResponse>(url);
  }
}
