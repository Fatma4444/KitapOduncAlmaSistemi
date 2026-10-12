import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-borrowed-books-header',
  styleUrl: './borrowed-books-header.css',
  templateUrl: './borrowed-books-header.html',
})
export class BorrowedBooksHeader {
   
  constructor(private router:Router){}
  
  gEriDon(){
      this.router.navigate(['/profile']);
  }
}
