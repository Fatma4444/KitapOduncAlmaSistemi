import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPastYearTabs } from './my-past-year-tabs';

describe('MyPastYearTabs', () => {
  let component: MyPastYearTabs;
  let fixture: ComponentFixture<MyPastYearTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPastYearTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPastYearTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
