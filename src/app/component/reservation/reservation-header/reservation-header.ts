import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-reservation-header',
  styleUrl: './reservation-header.css',
  templateUrl: './reservation-header.html',
})
export class ReservationHeader {

  constructor(private router:Router){}

  Geri(){
      this.router.navigate(['/profile']);
  }
}
