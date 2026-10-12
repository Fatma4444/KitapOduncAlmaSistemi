
import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '../../../../services/favorite.service';
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

  constructor(
    private router: Router,
    public favoriteService: FavoriteService
  ) {}

  kitapDetayinaGit(): void {
    this.router.navigate(['/book-detail']);
  }

  favoriyeEkle(event: MouseEvent): void {
    event.stopPropagation();

    this.favoriteService.favoriyeEkleVeyaCikar({
      kitapAdi: this.kitapAdi(),
      yazar: this.yazar(),
      basimYili: this.basimYili(),
      dil: this.dil(),
      raftaMi: this.raftaMi(),
      fakulte: this.fakulte(),
      kitapFoto: this.kitapFoto(),
    });
  }
}
