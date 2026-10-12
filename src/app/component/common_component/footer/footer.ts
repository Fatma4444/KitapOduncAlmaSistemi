import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {

   constructor(private router:Router){}
  homePage(){
     this.router.navigate(['']);
  }
  homePage1(){
     this.router.navigate(['/catalog']);
  }
  homePage2(){
     this.router.navigate(['']);
  }
  homePage3(){
     this.router.navigate(['/profile']);
  }

}
