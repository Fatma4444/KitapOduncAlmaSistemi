import { Component, computed, input } from '@angular/core';
import { MapBook } from '../../../services/library-map-service';

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
  book = input.required<MapBook>();

  infoRows = computed<InfoRow[]>(() => {
    const book = this.book();

    return [
      { icon: '🏛', label: 'Fakülte', value: book.faculty },
      { icon: '🎓', label: 'Bölüm', value: book.department },
      { icon: '📚', label: '', value: `${book.floor} - ${book.shelf} Rafı` },
      { icon: '📍', label: 'Kitaplık', value: `${book.bookcase} Raf: ${book.shelfNumber}` },
      { icon: '🏷', label: 'Demirbaş No', value: book.inventoryNumber },
    ];
  });
}