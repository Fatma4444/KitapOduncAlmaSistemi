import { Component } from '@angular/core';
import { BookPresentation } from './book-presentation/book-presentation';

@Component({
  imports: [BookPresentation],
  selector: 'app-book-detail',
  styleUrl: './book-detail.css',
  templateUrl: './book-detail.html',
})
export class BookDetail {}
