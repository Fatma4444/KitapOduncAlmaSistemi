import { Component } from '@angular/core';
import bookData from '../../book-detail/book.json';

@Component({
  selector: 'app-book-distribution',
  imports: [],
  templateUrl: './book-distribution.html',
  styleUrl: './book-distribution.css'
})
export class BookDistribution {

  books: any[] = Array.isArray(bookData) ? bookData : [bookData];

}