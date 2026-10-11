import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fatma } from './fatma';

describe('Fatma', () => {
  let component: Fatma;
  let fixture: ComponentFixture<Fatma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fatma],
    }).compileComponents();

    fixture = TestBed.createComponent(Fatma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
