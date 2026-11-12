import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaDistribution } from './area-distribution';

describe('AreaDistribution', () => {
  let component: AreaDistribution;
  let fixture: ComponentFixture<AreaDistribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaDistribution],
    }).compileComponents();

    fixture = TestBed.createComponent(AreaDistribution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
