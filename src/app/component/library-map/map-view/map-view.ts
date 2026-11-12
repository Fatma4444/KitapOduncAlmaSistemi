import { Component, computed, input, linkedSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-map-view',
  styleUrl: './map-view.css',
  templateUrl: './map-view.html',
})
export class MapView {
  initialFloor = input('Z');

  floors = ['3', '2', '1', 'Z'];

  selectedFloor = linkedSignal(() => this.initialFloor());

  floorName = computed(() =>
    this.selectedFloor() === 'Z' ? 'Zemin Kat' : `${this.selectedFloor()}. Kat`
  );

  selectFloor(floor: string): void {
    this.selectedFloor.set(floor);
  }
}