import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsHeader } from './statistics-header';

describe('StatisticsHeader', () => {
  let component: StatisticsHeader;
  let fixture: ComponentFixture<StatisticsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
