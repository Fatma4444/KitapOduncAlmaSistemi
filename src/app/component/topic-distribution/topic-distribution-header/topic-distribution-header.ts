import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-topic-distribution-header',
  styleUrl: './topic-distribution-header.css',
  templateUrl: './topic-distribution-header.html',
})
export class TopicDistributionHeader {
   constructor(private router:Router){}
  geriDON(){
      this.router.navigate(['/']);
  }
}
