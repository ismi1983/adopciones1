import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Response } from '../models/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials: Login): Observable<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/api/auth/login`, credentials);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('auth');
    return !!token;
  }
}
