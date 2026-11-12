import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-categories',
  standalone: true,
  imports: [],
  templateUrl: './profile-categories.html',
  styleUrl: './profile-categories.css'
})
export class ProfileCategories {
   constructor(private router:Router){}
  borrowedBooks(){
     this.router.navigate(['/borrowed-books']);
  }
  reservation(){
    this.router.navigate(['/reservation']);
  }
  myPastPage(){
    this.router.navigate(['/my-past']);
  }
  favorite(){
    this.router.navigate(['/favorite']);
  }
}
