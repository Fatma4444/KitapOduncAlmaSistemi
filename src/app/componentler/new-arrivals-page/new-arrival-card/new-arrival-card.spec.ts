import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewArrivalCard } from './new-arrival-card';

describe('NewArrivalCard', () => {
  let component: NewArrivalCard;
  let fixture: ComponentFixture<NewArrivalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalCard],
    }).compileComponents();

    fixture = TestBed.createComponent(NewArrivalCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
