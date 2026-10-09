import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewArrivalsHeader } from './new-arrivals-header';

describe('NewArrivalsHeader', () => {
  let component: NewArrivalsHeader;
  let fixture: ComponentFixture<NewArrivalsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalsHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(NewArrivalsHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
