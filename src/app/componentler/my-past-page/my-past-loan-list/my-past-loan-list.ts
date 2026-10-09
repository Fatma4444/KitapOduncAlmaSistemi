
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

interface LoanRecord {
  id: number;
  title: string;
  author: string;
  category: string;
  loanDate: string;
  dueDate: string;
  returnDate: string;
  status: 'İade Edildi' | 'Aktif' | 'Gecikmiş';
  year: string;
  coverClass: string;
}

@Component({
  selector: 'app-my-past-loan-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './my-past-loan-list.html',
  styleUrl: './my-past-loan-list.css'
})
export class MyPastLoanList {

  @Input() selectedYear = 'Tümü';

  loans: LoanRecord[] = [
    {
      id: 1,
      title: 'Suç ve Ceza',
      author: 'Fyodor Dostoyevski',
      category: 'Roman',
      loanDate: '12.10.2025',
      dueDate: '26.10.2025',
      returnDate: '24.10.2025',
      status: 'İade Edildi',
      year: '2025–2026',
      coverClass: 'cover-red'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      category: 'Distopya',
      loanDate: '05.09.2025',
      dueDate: '19.09.2025',
      returnDate: '18.09.2025',
      status: 'İade Edildi',
      year: '2025–2026',
      coverClass: 'cover-blue'
    },
    {
      id: 3,
      title: 'Kürk Mantolu Madonna',
      author: 'Sabahattin Ali',
      category: 'Roman',
      loanDate: '15.03.2025',
      dueDate: '29.03.2025',
      returnDate: '28.03.2025',
      status: 'İade Edildi',
      year: '2024–2025',
      coverClass: 'cover-green'
    },
    {
      id: 4,
      title: 'Beyaz Diş',
      author: 'Jack London',
      category: 'Macera',
      loanDate: '10.02.2025',
      dueDate: '24.02.2025',
      returnDate: '',
      status: 'Aktif',
      year: '2024–2025',
      coverClass: 'cover-brown'
    },
    {
      id: 5,
      title: 'Simyacı',
      author: 'Paulo Coelho',
      category: 'Roman',
      loanDate: '12.11.2024',
      dueDate: '26.11.2024',
      returnDate: '25.11.2024',
      status: 'İade Edildi',
      year: '2024–2025',
      coverClass: 'cover-gold'
    },
    {
      id: 6,
      title: 'Küçük Prens',
      author: 'Antoine de Saint-Exupéry',
      category: 'Klasik',
      loanDate: '08.04.2024',
      dueDate: '22.04.2024',
      returnDate: '23.04.2024',
      status: 'İade Edildi',
      year: '2023–2024',
      coverClass: 'cover-purple'
    }
  ];

  get filteredLoans(): LoanRecord[] {
    if (this.selectedYear === 'Tümü') {
      return this.loans;
    }

    return this.loans.filter(
      loan => loan.year === this.selectedYear
    );
  }

  get returnedCount(): number {
    return this.filteredLoans.filter(
      loan => loan.status === 'İade Edildi'
    ).length;
  }

  get activeCount(): number {
    return this.filteredLoans.filter(
      loan => loan.status === 'Aktif'
    ).length;
  }

  showDetails(loan: LoanRecord): void {
    alert(
      `Kitap: ${loan.title}\n` +
      `Yazar: ${loan.author}\n` +
      `Durum: ${loan.status}\n` +
      `Ödünç alma: ${loan.loanDate}\n` +
      `Son iade: ${loan.dueDate}`
    );
  }
}
