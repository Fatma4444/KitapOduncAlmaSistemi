import { Routes } from '@angular/router';
import { CatalogPage } from './componentler/catalog-page/catalog-page';
import { HomePage } from './component/home-page/home-page';
import {BookDetail} from './component/book-detail/book-detail';
import {TopicDistribution} from './component/topic-distribution/topic-distribution';
import {Profile} from './component/profile/profile';


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
  }

];