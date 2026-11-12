import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import bookData from '../../book-detail/book.json';

@Component({
  selector: 'app-area-distribution',
  imports: [DecimalPipe],
  templateUrl: './area-distribution.html',
  styleUrl: './area-distribution.css'
})
export class AreaDistribution {

  books: any[] = Array.isArray(bookData) ? bookData : [bookData];

  categories: {
    name: string;
    count: number;
    percentage: number;
    color: string;
  }[] = [];

  totalBooks = 0;

  colors = [
    '#2196F3',
    '#FF9800',
    '#00BCD4',
    '#8BC34A',
    '#E91E63',
    '#9E9E9E'
  ];

  constructor() {
    this.createDistribution();
  }

  createDistribution() {

    const categoryCounts: { [key: string]: number } = {};

    this.books.forEach(book => {

      if (!book.category) {
        return;
      }

      const category = book.category.split('>')[0].trim();

      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }

    });

    this.totalBooks = this.books.length;

    this.categories = Object.entries(categoryCounts)
      .map(([name, count], index) => ({
        name,
        count,
        percentage: (count / this.totalBooks) * 100,
        color: this.colors[index % this.colors.length]
      }))
      .sort((a, b) => b.count - a.count);
  }

  getChartBackground(): string {

    let currentPercentage = 0;

    const parts = this.categories.map(category => {

      const start = currentPercentage;

      currentPercentage += category.percentage;

      return `${category.color} ${start}% ${currentPercentage}%`;

    });

    return `conic-gradient(${parts.join(', ')})`;
  }
}