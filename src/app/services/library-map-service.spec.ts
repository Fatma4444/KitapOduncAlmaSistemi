import { TestBed } from '@angular/core/testing';
import { LibraryMapService } from './library-map-service';

describe('LibraryMapService', () => {
  let service: LibraryMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
