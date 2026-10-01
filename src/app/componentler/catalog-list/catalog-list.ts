import { Component } from '@angular/core';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-catalog-list',
  imports: [BookCard],
  templateUrl: './catalog-list.html',
  styleUrl: './catalog-list.css',
})
export class CatalogList {

}