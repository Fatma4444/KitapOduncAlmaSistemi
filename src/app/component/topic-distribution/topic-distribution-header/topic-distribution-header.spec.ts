import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicDistributionHeader } from './topic-distribution-header';

describe('TopicDistributionHeader', () => {
  let component: TopicDistributionHeader;
  let fixture: ComponentFixture<TopicDistributionHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicDistributionHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicDistributionHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
