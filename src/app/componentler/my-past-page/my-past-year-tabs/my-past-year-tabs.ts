import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-past-year-tabs',
  standalone: true,
  imports: [],
  templateUrl: './my-past-year-tabs.html',
  styleUrl: './my-past-year-tabs.css'
})
export class MyPastYearTabs {
  selectedYear = 'Tümü';

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

  @Output() yearChange = new EventEmitter<string>();

  selectYear(year: string): void {
    this.selectedYear = year;
    this.yearChange.emit(year);
  }
}