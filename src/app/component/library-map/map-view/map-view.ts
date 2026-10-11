import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-map-view',
  styleUrl: './map-view.css',
  templateUrl: './map-view.html',
})
export class MapView {
  floors = ['3', '2', '1', 'Z'];

  selectedFloor = signal('2');

  floorName = computed(() =>
    this.selectedFloor() === 'Z' ? 'Zemin Kat' : `${this.selectedFloor()}. Kat`
  );

  selectFloor(floor: string): void {
    this.selectedFloor.set(floor);
  }
}