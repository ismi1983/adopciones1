import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(credentials: object): Observable<SignUp> {
    return this.http.post<SignUp>('/api/auth/user', credentials);
  }
}
