import { Component, inject, input, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookCard } from './book-card/book-card';

@Component({
  selector: 'app-catalog-list',
  imports: [BookCard],
  templateUrl: './catalog-list.html',
  styleUrl: './catalog-list.css',
})
export class CatalogList {

  private http = inject(HttpClient);

  siralama = 'onerilen';

  aramaMetni = input<string>('');

  kategori = input<string>('Tümü');

  // Kitapları signal olarak tutuyoruz
  kitaplar = signal<any[]>([]);

  constructor() {

    this.http.get<any[]>('kitaplar.json').subscribe(data => {

      // JSON'dan gelen kitapları yükle
      this.kitaplar.set(data);

    });

  }

  siralamayiDegistir(event: Event) {
    this.siralama = (event.target as HTMLSelectElement).value;
  }

  get filtrelenmisKitaplar() {

    const arama = this.aramaMetni().toLowerCase().trim();

    let sonuc = this.kitaplar().filter(kitap =>
      kitap.kitapAdi.toLowerCase().startsWith(arama) ||
      kitap.yazar.toLowerCase().startsWith(arama)
    );

    // Kategori filtresi
    if (this.kategori() !== 'Tümü') {
      sonuc = sonuc.filter(kitap =>
        kitap.tur === this.kategori()
      );
    }

    // Yeni Eklenenler
    if (this.siralama === 'yeni') {
      return [...sonuc].sort((a, b) =>
        b.basimYili - a.basimYili
      );
    }

    // Alfabetik
    if (this.siralama === 'alfabetik') {
      return [...sonuc].sort((a, b) =>
        a.kitapAdi.localeCompare(b.kitapAdi, 'tr')
      );
    }

    return sonuc;
  }

}