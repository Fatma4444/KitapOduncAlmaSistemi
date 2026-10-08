import { Component } from '@angular/core';
import { BorrowedBooksHeader } from './borrowed-books-header/borrowed-books-header';
import { Situation } from './situation/situation';
import { LoanInformation } from './loan-information/loan-information';
import { Explanation } from './explanation/explanation';
import { BorrowedBooksFooter } from './borrowed-books-footer/borrowed-books-footer';

@Component({
  imports: [BorrowedBooksHeader, Situation, LoanInformation, Explanation, BorrowedBooksFooter],
  selector: 'app-borrowed-books',
  styleUrl: './borrowed-books.css',
  templateUrl: './borrowed-books.html',
})
export class BorrowedBooks {}
