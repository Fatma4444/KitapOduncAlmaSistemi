import { Component } from '@angular/core';
import { StatisticsHeader } from './statistics-header/statistics-header';
import { StatisticsCards } from './statistics-cards/statistics-cards';
import { Chart } from './chart/chart';

@Component({
  selector: 'app-library-statistics-page',
  imports: [
    StatisticsHeader,
    StatisticsCards,
    Chart
  ],
  templateUrl: './library-statistics-page.html',
  styleUrl: './library-statistics-page.css'
})
export class LibraryStatisticsPage {

}