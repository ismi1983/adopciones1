import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Dog } from 'src/app/models/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogs: Dog[];

  constructor(private dogService: DogsService) { }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
  }

}
