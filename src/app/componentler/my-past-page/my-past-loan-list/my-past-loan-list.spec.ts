import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPastLoanList } from './my-past-loan-list';

describe('MyPastLoanList', () => {
  let component: MyPastLoanList;
  let fixture: ComponentFixture<MyPastLoanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPastLoanList],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPastLoanList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
