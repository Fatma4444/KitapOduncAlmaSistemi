import { Routes } from '@angular/router';
import { CatalogPage } from './componentler/catalog-page/catalog-page';
import { HomePage } from './component/home-page/home-page';
import {BookDetail} from './component/book-detail/book-detail';
import { LibraryStatisticsPage } from './componentler/library-statistics-page/library-statistics-page';
import {TopicDistribution} from './component/topic-distribution/topic-distribution';


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
    path: 'book-detail',
    component: BookDetail
  },
  {
  path: 'library-statistics',
  component: LibraryStatisticsPage
  }

];