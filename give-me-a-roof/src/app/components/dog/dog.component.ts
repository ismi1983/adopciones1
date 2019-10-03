import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  @Input() dog: Dog;
  @Output() deleteDogEvent: EventEmitter<number> = new EventEmitter();

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
  }

  deleteDog(id: number): void{
    this.dogsService.deleteDog(id).subscribe(()=>{
      this.deleteDogEvent.emit(id);
    });
  }
}
