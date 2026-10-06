import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPresentation } from './book-presentation/book-presentation';
import { Header } from './header/header';
import { Orientation } from './orientation/orientation';
import { BookDescription } from './book-description/book-description';

import kitap from './book.json';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    CommonModule,
    BookPresentation,
    Header,
    Orientation,
    BookDescription,
    Footer
],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {

  kitap = kitap;

}