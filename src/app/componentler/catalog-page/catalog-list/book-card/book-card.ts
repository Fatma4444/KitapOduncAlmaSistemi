import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-book-card',
  styleUrl: './book-card.css',
  templateUrl: './book-card.html',
})
export class BookCard {
  kitapAdi = input<string>('');
  yazar = input<string>('');
  basimYili = input<number>(0);
  dil = input<string>('');
  raftaMi = input<boolean>(false);
  fakulte = input<string>('');
  kitapFoto = input<string>('');
}