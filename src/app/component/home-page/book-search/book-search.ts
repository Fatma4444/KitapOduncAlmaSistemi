import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-book-search',
  styleUrl: './book-search.css',
  templateUrl: './book-search.html',
})
export class BookSearch {

  constructor(private router:Router){}
  searchBooks(){
    this.router.navigate(['/catalog']);
  }
}
