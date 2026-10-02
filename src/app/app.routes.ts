import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import {BookDetail} from './components/book-detail/book-detail';


export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },

  {
    path: 'book-detail',
    component: BookDetail
  }

];