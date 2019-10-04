import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogIn } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials: object): Observable<LogIn> {
    return this.http.post<LogIn>('/api/auth/login', credentials);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('auth');

    if (!token) {
      return false;
    }

    return true;
  }
}
