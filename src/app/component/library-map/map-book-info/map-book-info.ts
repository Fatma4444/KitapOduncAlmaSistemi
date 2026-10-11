import { Component } from '@angular/core';

interface MapBook {
  title: string;
  authors: string[];
  coverImage: string;
  faculty: string;
  department: string;
  floor: string;
  shelf: string;
  bookcase: string;
  shelfNumber: number;
  inventoryNumber: string;
}

interface InfoRow {
  icon: string;
  label: string;
  value: string;
}

@Component({
  imports: [],
  selector: 'app-map-book-info',
  styleUrl: './map-book-info.css',
  templateUrl: './map-book-info.html',
})
export class MapBookInfo {
  book: MapBook = {
    title: 'Makine Öğrenmesi',
    authors: ['Dr. Elif Kaya', 'Dr. Mehmet Demir'],
    coverImage: '/images/images.jpg',
    faculty: 'Mühendislik Fakültesi',
    department: 'Bilgisayar Mühendisliği',
    floor: '2. Kat',
    shelf: 'B3',
    bookcase: 'B (Bilgisayar Mühendisliği)',
    shelfNumber: 3,
    inventoryNumber: '0045782',
  };

  infoRows: InfoRow[] = [
    { icon: '🏛', label: 'Fakülte', value: this.book.faculty },
    { icon: '🎓', label: 'Bölüm', value: this.book.department },
    { icon: '📚', label: '', value: `${this.book.floor} - ${this.book.shelf} Rafı` },
    { icon: '📍', label: 'Kitaplık', value: `${this.book.bookcase} Raf: ${this.book.shelfNumber}` },
    { icon: '🏷', label: 'Demirbaş No', value: this.book.inventoryNumber },
  ];
}
