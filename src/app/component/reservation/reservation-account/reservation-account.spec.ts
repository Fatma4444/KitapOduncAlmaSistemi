import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationAccount } from './reservation-account';

describe('ReservationAccount', () => {
  let component: ReservationAccount;
  let fixture: ComponentFixture<ReservationAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationAccount],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationAccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
