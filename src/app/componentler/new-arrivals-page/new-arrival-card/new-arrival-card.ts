import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-new-arrival-card',
  styleUrl: './new-arrival-card.css',
  templateUrl: './new-arrival-card.html',
})
export class NewArrivalCard {

  @Input() book: any;

}