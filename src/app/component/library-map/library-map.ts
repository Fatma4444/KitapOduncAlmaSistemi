import { Component, inject } from '@angular/core';
import { MapHeader } from './map-header/map-header';
import { MapView } from './map-view/map-view';
import { MapBookInfo } from './map-book-info/map-book-info';
import { MapDirections } from './map-directions/map-directions';
import { LibraryMapService } from '../../services/library-map-service';

@Component({
  imports: [MapHeader, MapView, MapBookInfo, MapDirections],
  selector: 'app-library-map',
  styleUrl: './library-map.css',
  templateUrl: './library-map.html',
})
export class LibraryMap {
  private libraryMapService = inject(LibraryMapService);

  bookId = 1;
  mapInfo = this.libraryMapService.getMapInfo(this.bookId);
}