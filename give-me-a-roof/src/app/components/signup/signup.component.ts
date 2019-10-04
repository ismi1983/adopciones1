import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]\w+')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]\w+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit() {
  }

  signup(): void {
    if (this.signupForm.valid) {
      // attempt login and store token
      this.signupService
        .signup(this.signupForm.value)
        .subscribe((token: string): void => {
          localStorage.setItem('auth', JSON.stringify(token));

          // navigate to other route
          this.router.navigateByUrl('/');
        });
    } else {
      alert('The data provided is invalid');
    }
  }

}
