import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { CatalogPage } from './componentler/catalog-page/catalog-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'catalog',
    component: CatalogPage
  }
];