import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-header',
  imports: [],
  templateUrl: './catalog-header.html',
  styleUrl: './catalog-header.css',
})
export class CatalogHeader {
  constructor(private router:Router){}

  geriDon(){
     this.router.navigate(['/']);
  }
  }


