import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicDistribution } from './topic-distribution';

describe('TopicDistribution', () => {
  let component: TopicDistribution;
  let fixture: ComponentFixture<TopicDistribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicDistribution],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicDistribution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
