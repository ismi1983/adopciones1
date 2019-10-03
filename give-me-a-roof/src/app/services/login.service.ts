import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials: object) {
    return this.http.post('/login', credentials);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('auth');

    if (!token) {
      return false;
    }

    return true;
  }
}
