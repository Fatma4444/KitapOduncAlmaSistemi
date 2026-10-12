import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-analysis-header',
  styleUrl: './analysis-header.css',
  templateUrl: './analysis-header.html',
})
export class AnalysisHeader {

  constructor(private router: Router) {}

  homePageGit(): void {
   this.router.navigate(['/']);
}
}
