import { Component } from '@angular/core';
import { AnalysisHeader } from './analysis-header/analysis-header';
import { AnalysisList } from './analysis-list/analysis-list';

@Component({
  selector: 'app-book-analysis-page',
  imports: [AnalysisHeader, AnalysisList],
  templateUrl: './book-analysis-page.html',
  styleUrl: './book-analysis-page.css',
})
export class BookAnalysisPage {}