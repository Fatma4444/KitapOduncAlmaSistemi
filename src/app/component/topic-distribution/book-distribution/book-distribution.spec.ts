import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDistribution } from './book-distribution';

describe('BookDistribution', () => {
  let component: BookDistribution;
  let fixture: ComponentFixture<BookDistribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDistribution],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDistribution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
