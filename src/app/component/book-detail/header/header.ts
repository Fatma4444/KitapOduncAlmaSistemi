import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
   constructor(private router:Router){}
  geriDonn(){
      this.router.navigate(['/catalog']);
  }
}
