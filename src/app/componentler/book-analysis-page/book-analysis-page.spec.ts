import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookAnalysisPage } from './book-analysis-page';

describe('BookAnalysisPage', () => {
  let component: BookAnalysisPage;
  let fixture: ComponentFixture<BookAnalysisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAnalysisPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BookAnalysisPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
