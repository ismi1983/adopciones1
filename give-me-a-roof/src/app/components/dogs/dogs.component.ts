import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogsService } from '../../services/dogs.service';
import { Dog } from '../../models/dog';
import { DogsResponse } from '../../models/dogs-response';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
  providers: [DogsService],
})
export class DogsComponent implements OnInit {
  dogs: Dog[];

  constructor(private dogService: DogsService, private router: Router) { }

  ngOnInit() {
    this.dogService.getDogs().subscribe((response: DogsResponse) => {
      this.dogs = response.data;
      this.dogs.map((dog) => dog.age = +dog.age);
    });
  }

  toCreatePage(): void {
    this.router.navigateByUrl('dogs/create');
  }

  deletedDog(): void {
    this.ngOnInit();
  }
}
