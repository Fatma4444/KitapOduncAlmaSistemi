
import { Component } from '@angular/core';
import { MyPastHeader } from './my-past-header/my-past-header';
import { MyPastUserCard } from './my-past-user-card/my-past-user-card';
import { MyPastYearTabs } from './my-past-year-tabs/my-past-year-tabs';
import { MyPastLoanList } from './my-past-loan-list/my-past-loan-list';

@Component({
  selector: 'app-my-past-page',
  standalone: true,
  imports: [
    MyPastHeader,
    MyPastUserCard,
    MyPastYearTabs,
    MyPastLoanList,
  ],
  templateUrl: './my-past-page.html',
  styleUrl: './my-past-page.css',
})
export class MyPastPage {
  selectedYear = 'Tümü';

  yearCounts: { [year: string]: number } = {};

  onYearChange(year: string): void {
    this.selectedYear = year;
  }

  onCountsChange(counts: { [year: string]: number }): void {
    this.yearCounts = counts;
  }
}
