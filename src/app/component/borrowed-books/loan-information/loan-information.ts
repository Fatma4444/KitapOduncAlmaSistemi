import { Component } from '@angular/core';
import borrowedBooks from '../../../data/borrowed-books.json';

@Component({
  imports: [],
  selector: 'app-loan-information',
  styleUrl: './loan-information.css',
  templateUrl: './loan-information.html',
})
export class LoanInformation {

  loanInformation = borrowedBooks.loanInformation;

  extendBook(book: any) {
    book.canExtend = false;
    book.extendText = 'Hak Doldu (1/1)';
  }
}