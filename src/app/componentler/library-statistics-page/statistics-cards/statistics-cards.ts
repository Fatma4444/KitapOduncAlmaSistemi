import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Kitap {
  kitapAdi: string;
  yazar: string;
  basimYili: number;
  dil: string;
  raftaMi: boolean;
  fakulte: string;
  kitapFoto: string;
  tur: string;
}

@Component({
  selector: 'app-statistics-cards',
  imports: [],
  templateUrl: './statistics-cards.html',
  styleUrl: './statistics-cards.css'
})
export class StatisticsCards implements OnInit {

  toplamKitap = signal(0);
  oduncteOlan = signal(0);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<Kitap[]>('/kitaplar.json').subscribe({

      next: (kitaplar) => {

        this.toplamKitap.set(kitaplar.length);

        this.oduncteOlan.set(
          kitaplar.filter(kitap => !kitap.raftaMi).length
        );

      },

      error: (hata) => {
        console.error(
          'Kitaplar yüklenirken hata oluştu:',
          hata
        );
      }

    });

  }
}