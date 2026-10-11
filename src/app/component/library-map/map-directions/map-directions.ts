import { Component } from '@angular/core';

interface DirectionStep {
  text: string;
  distanceInMeters: number;
}

@Component({
  imports: [],
  selector: 'app-map-directions',
  styleUrl: './map-directions.css',
  templateUrl: './map-directions.html',
})
export class MapDirections {
  steps: DirectionStep[] = [
    { text: 'Bulunduğunuz konumdan sağa ilerleyin.', distanceInMeters: 10 },
    { text: 'Merdivenlerden 2. kata çıkın.', distanceInMeters: 15 },
    { text: 'Bilgisayar Mühendisliği kitaplık alanına gidin.', distanceInMeters: 20 },
    { text: 'B kitaplığında sağ taraftaki 3. rafa ulaşın.', distanceInMeters: 5 },
  ];
}
