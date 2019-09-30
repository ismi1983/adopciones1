import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DogsService } from '../../services/dogs.service';
import { Dog } from '../../models/dog';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.scss']
})
export class CreateDogComponent implements OnInit {
  createForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.pattern('[a-zA-z ]*'), Validators.required]),
    age: new FormControl('', Validators.required),
    sex: new FormControl('', [Validators.pattern('(Female)|(Male)'), Validators.required]),
    description: new FormControl('', [Validators.maxLength(120), Validators.required]),
    imgUrl: new FormControl('', Validators.required),
  });

  constructor(private dogService: DogsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      this.submitDog(this.createForm.value);
    } else {
      alert('Invalid data!');
    }
  }

  private submitDog(data: Dog): void {
    this.dogService.createDog(data).subscribe((data: Dog): void => {
      console.log(data);
      this.router.navigateByUrl('dogs');
    });
  }
}
