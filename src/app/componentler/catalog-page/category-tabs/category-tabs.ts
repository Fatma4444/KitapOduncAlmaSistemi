import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-category-tabs',
  styleUrl: './category-tabs.css',
  templateUrl: './category-tabs.html',
})
export class CategoryTabs {

  seciliKategori = 'Tümü';

  kategori = output<string>();

  kategoriSec(kategori: string) {
    this.seciliKategori = kategori;
    this.kategori.emit(kategori);
  }

}