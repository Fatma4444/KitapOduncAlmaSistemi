
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import favoritData from '../../../data/favorite.json';
import { FavoriteService } from '../../../services/favorite.service';

interface FavoriteBook {
  id: number;
  title: string;
  authors: string[];
  year: number;
  language: string;
  edition: string;
  coverImage: string;
  status: string;
  statusText: string;
  category: string;
  location: string;
  shelf: string;
  isFavorite: boolean;
  reservation: {
    isReserved: boolean;
    reservedAt: string | null;
    reservedUntil: string | null;
  };
  katalogKitabi?: boolean;
  katalogKitapAdi?: string;
}

@Component({
  selector: 'app-favorite-saved-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './favorite-saved-list.html',
  styleUrl: './favorite-saved-list.css'
})
export class FavoriteSavedList implements OnDestroy {
  searchText = '';
  activeFilter = 'all';

  reservationSettings = favoritData.reservationSettings;

  books: FavoriteBook[] = favoritData.books.map(book => ({
    ...book,
    reservation: { ...book.reservation }
  }));

  private timer?: ReturnType<typeof setInterval>;

  constructor(private favoriteService: FavoriteService) {
    this.checkExpiredReservations();

    this.katalogFavorileriniEkle();

    this.timer = setInterval(() => {
      this.checkExpiredReservations();
    }, 1000);
  }

  private katalogFavorileriniEkle(): void {
    const favoriler = this.favoriteService.favorileriListele();

    const katalogKitaplari: FavoriteBook[] = favoriler.map(
      (kitap: any, index: number) => ({
        id: -(index + 1),
        title: kitap.kitapAdi,
        authors: [kitap.yazar || 'Bilinmiyor'],
        year: kitap.basimYili || 0,
        language: kitap.dil || 'Belirtilmemiş',
        edition: 'Standart',
        coverImage: kitap.kitapFoto || '',
        status: kitap.raftaMi ? 'available' : 'borrowed',
        statusText: kitap.raftaMi ? 'Rafta Var' : 'Ödünçte',
        category: kitap.tur || 'Belirtilmemiş',
        location: kitap.fakulte || 'Belirtilmemiş',
        shelf: 'Belirtilmemiş',
        isFavorite: true,
        reservation: {
          isReserved: false,
          reservedAt: null,
          reservedUntil: null
        },
        katalogKitabi: true,
        katalogKitapAdi: kitap.kitapAdi
      })
    );

    const katalogAdlari = new Set(
      katalogKitaplari.map(book =>
        book.title.toLocaleLowerCase('tr')
      )
    );

    const mevcutKitaplar = this.books.filter(
      book =>
        !katalogAdlari.has(book.title.toLocaleLowerCase('tr'))
    );

    this.books = [...mevcutKitaplar, ...katalogKitaplari];
  }

  get filteredBooks(): FavoriteBook[] {
    return this.books.filter(book => {
      const search = this.searchText.toLocaleLowerCase('tr');

      const matchesSearch =
        book.title.toLocaleLowerCase('tr').includes(search) ||
        book.authors.join(', ').toLocaleLowerCase('tr').includes(search);

      const matchesFilter =
        this.activeFilter === 'all' ||
        (this.activeFilter === 'available' && book.status === 'available') ||
        (this.activeFilter === 'borrowed' && book.status === 'borrowed');

      return matchesSearch && matchesFilter;
    });
  }

  reserveBook(book: FavoriteBook): void {
    if (book.status !== 'available' || book.reservation.isReserved) {
      return;
    }

    const now = new Date();

    const endTime = new Date(
      now.getTime() +
      favoritData.reservationSettings.durationHours * 60 * 60 * 1000
    );

    book.reservation.isReserved = true;
    book.reservation.reservedAt = now.toISOString();
    book.reservation.reservedUntil = endTime.toISOString();

    this.books = [...this.books];
  }

  getReservationEndTime(book: FavoriteBook): string {
    const endTime = book.reservation.reservedUntil;

    if (!endTime) {
      return '';
    }

    return new Date(endTime).toLocaleString('tr-TR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  checkExpiredReservations(): void {
    let changed = false;

    for (const book of this.books) {
      const endTime = book.reservation.reservedUntil;

      if (endTime && new Date(endTime).getTime() <= Date.now()) {
        book.reservation.isReserved = false;
        book.reservation.reservedAt = null;
        book.reservation.reservedUntil = null;
        changed = true;
      }
    }

    if (changed) {
      this.books = [...this.books];
    }
  }

  removeFavorite(bookId: number): void {
    const book = this.books.find(item => item.id === bookId);

    if (!book) {
      return;
    }

    if (book.katalogKitabi && book.katalogKitapAdi) {
      const katalogKitabi = this.favoriteService
        .favorileriListele()
        .find((item: any) => item.kitapAdi === book.katalogKitapAdi);

      if (katalogKitabi) {
        this.favoriteService.favoriyeEkleVeyaCikar(katalogKitabi);
      }
    }

    this.books = this.books.filter(item => item.id !== bookId);
  }

  showOnMap(book: FavoriteBook): void {
    alert(`${book.location}, Raf: ${book.shelf}`);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
