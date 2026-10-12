import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-favorite-header',
  styleUrl: './favorite-header.css',
  templateUrl: './favorite-header.html',
})
export class FavoriteHeader {
    constructor(private router:Router){}
  GeriD(){
      this.router.navigate(['/profile']);
  }
}
