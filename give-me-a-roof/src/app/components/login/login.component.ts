import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from 'src/app/models/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login(): void {
    if (this.loginForm.valid) {
      // attempt login and store token
      this.loginService
        .login(this.loginForm.value)
        .subscribe((response: LoginResponse): void => {
          const { token } = response.data; 
          localStorage.setItem('auth', token);

          // navigate to other route
          this.router.navigateByUrl('/');
        });
    } else {
      alert('The data provided is invalid');
    }
  }
}
