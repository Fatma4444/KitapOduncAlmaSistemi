import { Component, input } from '@angular/core';
import { DirectionStep } from '../../../services/library-map-service';

@Component({
  imports: [],
  selector: 'app-map-directions',
  styleUrl: './map-directions.css',
  templateUrl: './map-directions.html',
})
export class MapDirections {
  steps = input.required<DirectionStep[]>();
}