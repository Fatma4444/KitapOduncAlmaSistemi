import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  imports: [],
  selector: 'app-map-header',
  styleUrl: './map-header.css',
  templateUrl: './map-header.html',
})
export class MapHeader {
  private location = inject(Location);

  goBack(): void {
    this.location.back();
  }
}
