import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../models/signup';
import { SignupResponse } from '../models/signup-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(credentials: Signup): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${environment.apiUrl}/auth/user`, credentials);
  }
}
