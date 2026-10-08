import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowedBooksHeader } from './borrowed-books-header';

describe('BorrowedBooksHeader', () => {
  let component: BorrowedBooksHeader;
  let fixture: ComponentFixture<BorrowedBooksHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowedBooksHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowedBooksHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
