import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-past-header',
  standalone: true,
  imports: [],
  templateUrl: './my-past-header.html',
  styleUrl: './my-past-header.css'
})
export class MyPastHeader {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
