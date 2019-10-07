import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit() {
  }

  signup(): void {
    if (this.signupForm.valid) {
      // attempt login and store token
      this.signupService
        .signup(this.signupForm.value)
        .subscribe((response: Response): void => {
          if (response.status === 'success') {
            // navigate to other route
            this.router.navigateByUrl('/');
          } else {
            console.log(response);
          }
        });
    } else {
      alert('The data provided is invalid');
    }
  }

}
