import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPresentation } from './book-presentation/book-presentation';
import { Header } from './header/header';

import kitap from './book.json';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    CommonModule,
    BookPresentation,
    Header
  ],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {

  kitap = kitap;

}