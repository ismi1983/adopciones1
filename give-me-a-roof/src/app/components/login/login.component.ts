import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private routing: Router) { }

  ngOnInit() {
  }

  login(data): void{
    if(this.loginForm.valid){
      this.routing.navigate(['/']);
    }else{
      if(!this.loginForm.get('email').valid && this.loginForm.get('password').valid){
        alert("El correo proporcionado es incorrecto.")
      }else if(!this.loginForm.get('password').valid && this.loginForm.get('email').valid){
        alert("La contraseña proporcionada es incorrecta.")
      }else{
        alert("Los datos proporcionados son incorrectos");
      }
    }
  }
}
