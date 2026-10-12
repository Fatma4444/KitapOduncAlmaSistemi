import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-quick-access',
  styleUrl: './quick-access.css',
  templateUrl: './quick-access.html',
})
export class QuickAccess {

  constructor(private router:Router){}
  quickAccess(){
    this.router.navigate(['/new-arrivals']);
  }
  quickAccess2(){
    this.router.navigate(['/book-analysis'])
  }
  quickAccess3(){
    this.router.navigate(['/favorite'])
  }
  quickAccess4(){
    this.router.navigate(['/library-statistics'])
  }

}
