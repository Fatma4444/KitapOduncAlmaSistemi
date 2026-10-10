
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

interface Book {
  kitapAdi: string;
  yazar: string;
  basimYili: number;
  dil: string;
  kitapFoto: string;
  tur: string;
}

interface LoanHistory {
  kitapAdi: string;
  donem: string;
  durum: string;
  iadeDurumu?: string;
  rafKodu: string;
  kutuphaneKonumu: string;
  oduncTarihi: string;
  iadeTarihi: string;
  oduncSuresi: number;
  gecikmeGunu?: number;
  afKapsaminda?: boolean;
}

interface LoanRecord extends LoanHistory {
  kitap?: Book;
}

@Component({
  selector: 'app-my-past-loan-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-past-loan-list.html',
  styleUrl: './my-past-loan-list.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class MyPastLoanList implements OnInit {
  @Input() selectedYear = 'Tümü';

  @Output()
  countsChange = new EventEmitter<{ [year: string]: number }>();

  loans: LoanRecord[] = [];
  loading = true;
  errorMessage = '';

  selectedLoan: LoanRecord | null = null;
  modalType: 'borrow' | 'review' | null = null;

  selectedRating = 0;
  reviewComment = '';
  feedbackMessage = '';
  borrowConfirmed = false;
  reviewSubmitted = false;

  readonly years = [
    '2025–2026',
    '2024–2025',
    '2023–2024',
    '2022–2023',
    '2021–2022',
    '2020–2021',
    '2019–2020'
  ];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    forkJoin({
      books: this.http.get<Book[]>('/kitaplar.json'),
      history: this.http.get<LoanHistory[]>('/loan-history.json')
    }).subscribe({
      next: ({ books, history }) => {
        this.loans = history.map(loan => ({
          ...loan,
          kitap: books.find(book =>
            book.kitapAdi.trim().toLocaleLowerCase('tr-TR') ===
            loan.kitapAdi.trim().toLocaleLowerCase('tr-TR')
          )
        }));

        this.emitCounts();
        this.loading = false;
        this.cdr.detectChanges();
      },

      error: error => {
        console.error('Veriler yüklenemedi:', error);
        this.errorMessage =
          'Veriler yüklenirken bir hata oluştu.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private emitCounts(): void {
    const counts: { [year: string]: number } = {
      'Tümü': this.loans.length
    };

    for (const period of this.years) {
      const years = period.match(/\d{4}/g);

      if (!years || years.length < 2) {
        counts[period] = 0;
        continue;
      }

      const startYear = Number(years[0]);
      const endYear = Number(years[1]);

      counts[period] = this.loans.filter(loan => {
        const year = Number(loan.oduncTarihi.slice(0, 4));
        return year >= startYear && year <= endYear;
      }).length;
    }

    this.countsChange.emit(counts);
  }

  get filteredLoans(): LoanRecord[] {
    if (this.selectedYear === 'Tümü') {
      return this.loans;
    }

    const years = this.selectedYear.match(/\d{4}/g);

    if (!years || years.length < 2) {
      return this.loans;
    }

    const startYear = Number(years[0]);
    const endYear = Number(years[1]);

    return this.loans.filter(loan => {
      const year = Number(loan.oduncTarihi.slice(0, 4));
      return year >= startYear && year <= endYear;
    });
  }

  formatDate(date: string): string {
    return new Date(date + 'T12:00:00').toLocaleDateString(
      'tr-TR',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }
    );
  }

  openBorrowModal(loan: LoanRecord): void {
    this.selectedLoan = loan;
    this.modalType = 'borrow';
    this.feedbackMessage = '';
    this.borrowConfirmed = false;
  }

  openReviewModal(loan: LoanRecord): void {
    this.selectedLoan = loan;
    this.modalType = 'review';
    this.selectedRating = 0;
    this.reviewComment = '';
    this.feedbackMessage = '';
    this.reviewSubmitted = false;
  }

  closeModal(): void {
    this.modalType = null;
    this.selectedLoan = null;
    this.feedbackMessage = '';
  }

  selectRating(rating: number): void {
    this.selectedRating = rating;
    this.feedbackMessage = '';
  }

  confirmBorrow(): void {
    if (!this.selectedLoan) {
      return;
    }

    this.borrowConfirmed = true;
    this.feedbackMessage =
      'Onayınız alındı. Ödünç işleminin tamamlanması için sunucu bağlantısı gereklidir.';
  }

  submitReview(): void {
  if (this.selectedRating === 0 && !this.reviewComment.trim()) {
    this.feedbackMessage =
      'Lütfen yıldız puanı verin veya bir yorum yazın.';
    return;
  }

  this.reviewSubmitted = true;
  this.feedbackMessage =
    'Değerlendirmeniz alındı. Kalıcı olarak kaydedilmesi için sunucu bağlantısı gereklidir.';
}
}
