import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Explanation } from './explanation';

describe('Explanation', () => {
  let component: Explanation;
  let fixture: ComponentFixture<Explanation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explanation],
    }).compileComponents();

    fixture = TestBed.createComponent(Explanation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
