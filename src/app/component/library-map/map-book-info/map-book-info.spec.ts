import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapBookInfo } from './map-book-info';

describe('MapBookInfo', () => {
  let component: MapBookInfo;
  let fixture: ComponentFixture<MapBookInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapBookInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(MapBookInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
