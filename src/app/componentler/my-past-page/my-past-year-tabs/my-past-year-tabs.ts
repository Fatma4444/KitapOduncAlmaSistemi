
import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-my-past-year-tabs',
  standalone: true,
  imports: [],
  templateUrl: './my-past-year-tabs.html',
  styleUrl: './my-past-year-tabs.css'
})
export class MyPastYearTabs implements OnChanges {
  @Input() selectedYear = 'Tümü';
  @Input() yearCounts: { [year: string]: number } = {};

  @Output() yearChange = new EventEmitter<string>();

  years = [
    'Tümü',
    '2025–2026',
    '2024–2025',
    '2023–2024',
    '2022–2023',
    '2021–2022',
    '2020–2021',
    '2019–2020'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedYear']) {
      this.selectedYear = this.selectedYear || 'Tümü';
    }
  }

  selectYear(year: string): void {
    this.selectedYear = year;
    this.yearChange.emit(year);
  }

  getCount(year: string): number {
    return this.yearCounts[year] ?? 0;
  }
}
