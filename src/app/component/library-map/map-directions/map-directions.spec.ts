import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapDirections } from './map-directions';

describe('MapDirections', () => {
  let component: MapDirections;
  let fixture: ComponentFixture<MapDirections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapDirections],
    }).compileComponents();

    fixture = TestBed.createComponent(MapDirections);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
