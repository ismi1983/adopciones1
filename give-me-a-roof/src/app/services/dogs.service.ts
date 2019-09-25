import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs: Dog[];

  constructor() { 
    this.dogs = [
      {
        name: 'Buddy',
        description: 'Buddy is 3 years old. He was found under a bench in a park.',
        age: 3,
        photo: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
      {
        name: 'Princess',
        description: 'Princess is just 1 year old. She was found wandering downtown.',
        age: 1,
        photo: 'https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      },
      {
        name: 'Max',
        description: 'Max is an old dog, aging 15 years old, but he has still much energy to play!',
        age: 15,
        photo: 'https://images.unsplash.com/photo-1534283363159-b466d8abfcb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1424&q=80',
      },
      {
        name: 'Joy',
        description: 'Joy is a little pup of a few months old. Playful and full of joy, like her name!',
        age: 0.5,
        photo: 'https://images.unsplash.com/photo-1530667912788-f976e8ee0bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      }
    ]
  }

  getDogs(): Dog[] {
    return this.dogs;
  }
}
