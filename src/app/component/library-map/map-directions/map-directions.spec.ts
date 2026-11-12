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
    fixture.componentRef.setInput('steps', [
      { text: 'Test adımı', distanceInMeters: 5 },
    ]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
