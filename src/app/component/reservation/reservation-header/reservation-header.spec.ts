import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationHeader } from './reservation-header';

describe('ReservationHeader', () => {
  let component: ReservationHeader;
  let fixture: ComponentFixture<ReservationHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
