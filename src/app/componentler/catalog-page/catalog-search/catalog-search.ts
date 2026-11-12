import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-catalog-search',
  styleUrl: './catalog-search.css',
  templateUrl: './catalog-search.html',
})
export class CatalogSearch {

  arama = output<string>();

  ara(metin: string) {
    this.arama.emit(metin);
  }

}