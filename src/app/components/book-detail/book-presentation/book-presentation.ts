import { Component } from '@angular/core';

@Component({
  selector: 'app-book-presentation',
  standalone: true,
  imports: [],
  templateUrl: './book-presentation.html',
  styleUrl: './book-presentation.css'
})
export class BookPresentation {

  kitap = {
    title: 'Makine Öğrenmesi',
    coverImage: 'images/images.jpg'
  };

}