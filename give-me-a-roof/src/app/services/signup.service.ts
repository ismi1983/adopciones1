import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../models/signup';
import { Response } from '../models/response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(credentials: Signup): Observable<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/api/auth/user`, credentials);
  }
}
