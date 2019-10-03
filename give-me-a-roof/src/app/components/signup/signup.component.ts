import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signup(): void {
    if (this.signupForm.valid) {
      this.router.navigateByUrl('/');
    } else {
      alert('Check your data! Some of it is wrong');
    }
  }

}
