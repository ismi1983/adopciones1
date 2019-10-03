import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

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
        .subscribe((token: string): void => {
          localStorage.setItem('auth', JSON.stringify(token));

          // navigate to other route
          this.router.navigateByUrl('/');
        });
    } else {
      alert('The data provided is invalid');
    }

    // if (this.loginForm.valid) {
    //   this.routing.navigate(['/']);
    // } else {
    //   if (!this.loginForm.get('email').valid && this.loginForm.get('password').valid) {
    //     alert("El correo proporcionado es inválido.");
    //   } else if (!this.loginForm.get('password').valid && this.loginForm.get('email').valid) {
    //     alert("La contraseña proporcionada es inválida.");
    //   } else {
    //     alert("Los datos proporcionados son inválidos.");
    //   }
    // }
  }
}
