import { Routes } from '@angular/router';
import { HomePage } from './component/home-page/home-page';
import {BookDetail} from './component/book-detail/book-detail';


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