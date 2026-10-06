import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookPresentation } from './book-presentation';

describe('BookPresentation', () => {
  let component: BookPresentation;
  let fixture: ComponentFixture<BookPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPresentation],
    }).compileComponents();

    fixture = TestBed.createComponent(BookPresentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
