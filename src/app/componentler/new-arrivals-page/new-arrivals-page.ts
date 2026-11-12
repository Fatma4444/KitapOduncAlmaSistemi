import { Component } from '@angular/core';
import { NewArrivalsHeader } from './new-arrivals-header/new-arrivals-header';
import { NewArrivalsList } from './new-arrivals-list/new-arrivals-list';

@Component({
  imports: [
    NewArrivalsHeader,
    NewArrivalsList
  ],
  selector: 'app-new-arrivals-page',
  styleUrl: './new-arrivals-page.css',
  templateUrl: './new-arrivals-page.html',
})
export class NewArrivalsPage {}