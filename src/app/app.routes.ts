import { Routes } from '@angular/router';
import { CatalogPage } from './componentler/catalog-page/catalog-page';
import { HomePage } from './component/home-page/home-page';
import {BookDetail} from './component/book-detail/book-detail';
import { LibraryStatisticsPage } from './componentler/library-statistics-page/library-statistics-page';
import {TopicDistribution} from './component/topic-distribution/topic-distribution';
import {Profile} from './component/profile/profile';
import { BorrowedBooks } from './component/borrowed-books/borrowed-books';


export const routes: Routes = [ 
  {
    path: '',
    component: HomePage
  },
  {
    path: 'topic-distribution',
    component: TopicDistribution
  },
  {
    path: 'catalog',
    component: CatalogPage
  },
  {
    path: 'profile',
    component: Profile
  },
  {
    path: 'book-detail',
    component: BookDetail
  },
  {
  path: 'library-statistics',
  component: LibraryStatisticsPage
  },
  {
    path: 'borrowed-books',
    component: BorrowedBooks
  }

];