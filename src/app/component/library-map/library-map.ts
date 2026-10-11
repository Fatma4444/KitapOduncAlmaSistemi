import { Component } from '@angular/core';
import { MapHeader } from './map-header/map-header';
import { MapView } from './map-view/map-view';
import { MapBookInfo } from './map-book-info/map-book-info';
import { MapDirections } from './map-directions/map-directions';

@Component({
  imports: [MapHeader, MapView, MapBookInfo, MapDirections],
  selector: 'app-library-map',
  styleUrl: './library-map.css',
  templateUrl: './library-map.html',
})
export class LibraryMap { }