
import { Component } from '@angular/core';
import reservationData from '../../../data/reservation.json';

@Component({
  selector: 'app-reservation-status',
  standalone: true,
  imports: [],
  templateUrl: './reservation-status.html',
  styleUrl: './reservation-status.css'
})
export class ReservationStatus {
  rules = reservationData.rules;
}
