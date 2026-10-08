import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowedBooksFooter } from './borrowed-books-footer';

describe('BorrowedBooksFooter', () => {
  let component: BorrowedBooksFooter;
  let fixture: ComponentFixture<BorrowedBooksFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowedBooksFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowedBooksFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
