import { Component } from '@angular/core';
import { ReservationHeader } from './reservation-header/reservation-header';
import { ReservationStatus } from './reservation-status/reservation-status';
import { ReservationQueue } from './reservation-queue/reservation-queue';
import { ReservationAccount } from './reservation-account/reservation-account';

@Component({
  imports: [ReservationHeader, ReservationAccount, ReservationQueue, ReservationStatus],
  selector: 'app-reservation',
  styleUrl: './reservation.css',
  templateUrl: './reservation.html',
})
export class Reservation {}
