import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedBackButton } from './shared-back-button';

describe('SharedBackButton', () => {
  let component: SharedBackButton;
  let fixture: ComponentFixture<SharedBackButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedBackButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedBackButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
