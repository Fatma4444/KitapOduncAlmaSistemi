import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orientation',
  standalone: true,
  imports: [],
  templateUrl: './orientation.html',
  styleUrl: './orientation.css'
})
export class Orientation {
  @Input() kitap: any;
}