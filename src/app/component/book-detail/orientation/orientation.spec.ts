import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Orientation } from './orientation';

describe('Orientation', () => {
  let component: Orientation;
  let fixture: ComponentFixture<Orientation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orientation],
    }).compileComponents();

    fixture = TestBed.createComponent(Orientation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
