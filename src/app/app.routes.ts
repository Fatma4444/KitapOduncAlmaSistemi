import { Routes } from '@angular/router';
import { CatalogPage } from './componentler/catalog-page/catalog-page';
import { HomePage } from './component/home-page/home-page';
import {BookDetail} from './component/book-detail/book-detail';


export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'catalog',
    component: CatalogPage

  {
    path: 'book-detail',
    component: BookDetail
  }

];