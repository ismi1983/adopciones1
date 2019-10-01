import { Component, OnInit, Input } from '@angular/core';
import { Dog } from 'src/app/models/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  @Input() dog: Dog;

  constructor() { }

  ngOnInit() {
  }

  deleteDog(): void{
    alert("No");
    /* Metodo service delete */
  }
}
