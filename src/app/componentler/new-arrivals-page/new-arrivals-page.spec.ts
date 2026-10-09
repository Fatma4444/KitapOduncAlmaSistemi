import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewArrivalsPage } from './new-arrivals-page';

describe('NewArrivalsPage', () => {
  let component: NewArrivalsPage;
  let fixture: ComponentFixture<NewArrivalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NewArrivalsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
