
import { Component } from '@angular/core';
import reservationData from '../../../data/reservation.json';

@Component({
  selector: 'app-reservation-queue',
  standalone: true,
  imports: [],
  templateUrl: './reservation-queue.html',
  styleUrl: './reservation-queue.css'
})
export class ReservationQueue {

  filters = reservationData.filters;
  reservations = [...reservationData.reservations];

  activeFilter: string = 'all';

  get filteredReservations() {
    if (this.activeFilter === 'all') {
      return this.reservations;
    }

    return this.reservations.filter(
      item => item.status === this.activeFilter
    );
  }

  getCount(filter: string): number {
    if (filter === 'all') {
      return this.reservations.length;
    }

    return this.reservations.filter(
      item => item.status === filter
    ).length;
  }

  selectFilter(filter: string): void {
    this.activeFilter = filter;
  }

  showShelfLocation(location: string): void {
    alert('Kitabın raf konumu:\n' + location);
  }

  cancelReservation(id: number): void {
    const approved = confirm(
      'Bu rezervasyonu iptal etmek istediğinize emin misiniz?'
    );

    if (approved) {
      this.reservations = this.reservations.filter(
        item => item.id !== id
      );
    }
  }
}
