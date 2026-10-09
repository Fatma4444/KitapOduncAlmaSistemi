import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewArrivalCard } from '../new-arrival-card/new-arrival-card';
import { Book } from '../../../services/book';

@Component({
  imports: [CommonModule, NewArrivalCard],
  selector: 'app-new-arrivals-list',
  styleUrl: './new-arrivals-list.css',
  templateUrl: './new-arrivals-list.html',
})
export class NewArrivalsList implements OnInit {

  books: any[] = [];

  constructor(
    private bookService: Book,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    console.log('NG ON INIT ÇALIŞTI');

    this.bookService.getBooks().subscribe({
      next: (data) => {

        console.log('VERİ GELDİ:', data);
        console.log('KİTAP SAYISI:', data.length);

        this.books = [...data].sort(
        (a, b) =>
        new Date(b.eklenmeTarihi).getTime() -
        new Date(a.eklenmeTarihi).getTime()
       );

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('VERİ HATASI:', error);
      }
    });

  }

}