
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BookPresentation } from './book-presentation/book-presentation';
import { Header } from './header/header';
import { Orientation } from './orientation/orientation';
import { BookDescription } from './book-description/book-description';
import { Footer } from '../common_component/footer/footer';

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
export class BookDetail implements OnInit {

  kitap = signal<any | null>(null);

  yukleniyor = signal(true);

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {

      const secilenKitap = params.get('kitapAdi');

      console.log('Seçilen kitap:', secilenKitap);

      if (!secilenKitap) {
        this.kitap.set(null);
        this.yukleniyor.set(false);
        return;
      }

      this.yukleniyor.set(true);

      this.http.get<any[]>('/kitaplar.json').subscribe({

        next: (data) => {

          const bulunanKitap = data.find(
            kitap => kitap.kitapAdi === secilenKitap
          );

          this.kitap.set(bulunanKitap || null);

          this.yukleniyor.set(false);

          console.log('Bulunan kitap:', this.kitap());

        },

        error: (err) => {

          console.error('JSON yükleme hatası:', err);

          this.kitap.set(null);
          this.yukleniyor.set(false);

        }

      });

    });

  }

}
