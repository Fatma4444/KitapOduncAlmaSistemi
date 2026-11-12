import { Component } from '@angular/core';
import { CatalogHeader } from './catalog-header/catalog-header';
import { CatalogSearch } from './catalog-search/catalog-search';
import { CategoryTabs } from './category-tabs/category-tabs';
import { CatalogList } from './catalog-list/catalog-list';

@Component({
  selector: 'app-catalog-page',
  imports: [CatalogHeader, CatalogSearch, CategoryTabs, CatalogList],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css',
})
export class CatalogPage {

  aramaMetni = '';

  kategori = 'Tümü';

  kategoriSec(kategori: string) {
  this.kategori = kategori;
  console.log('Seçilen kategori:', this.kategori);
  }

  aramaYap(metin: string) {
    this.aramaMetni = metin;
  }

}