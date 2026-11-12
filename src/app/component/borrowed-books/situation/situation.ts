import { Component } from '@angular/core';
import borrowedBooks from '../../../data/borrowed-books.json';

@Component({
  imports: [],
  selector: 'app-situation',
  styleUrl: './situation.css',
  templateUrl: './situation.html',
})
export class Situation {

  situation = borrowedBooks;

}