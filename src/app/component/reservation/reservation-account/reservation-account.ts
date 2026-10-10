import { Component } from '@angular/core';
import accountData from '../../../data/reservation.json';

@Component({
  selector: 'app-reservation-account',
  standalone: true,
  imports: [],
  templateUrl: './reservation-account.html',
  styleUrl: './reservation-account.css'
})
export class ReservationAccount {
  account = accountData;
}