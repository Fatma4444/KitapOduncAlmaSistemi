import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
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
  private route = inject(ActivatedRoute);

  private queryParams = toSignal(this.route.queryParamMap);

  bookId = computed(() => {
    const value = this.queryParams()?.get('bookId');
    return value ? Number(value) : null;
  });

  mapInfo = computed(() => {
    const id = this.bookId();
    return id === null ? undefined : this.libraryMapService.getMapInfo(id);
  });
}