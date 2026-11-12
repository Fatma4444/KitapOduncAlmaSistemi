import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanInformation } from './loan-information';

describe('LoanInformation', () => {
  let component: LoanInformation;
  let fixture: ComponentFixture<LoanInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
