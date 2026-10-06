import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-presentation',
  standalone: true,
  imports: [],
  templateUrl: './book-presentation.html',
  styleUrl: './book-presentation.css'
})
export class BookPresentation {

  @Input() kitap = {
    title: '',
    coverImage: '',

    authors: [] as string[],

    year: 0,
    language: '',
    edition: '',

    availability: {
      totalBranches: 0,
      available: false,
      availableCount: 0
    },

    locations: [] as {
      library: string;
      locationType: string;
      status: string;
      returnDate?: string;
      floor: string;
      shelf?: string;
      section?: string;
      available: boolean;
      quantity: number;
    }[],

    description: '',

    details: {
      isbn: '',
      subject: '',
      pageCount: 0,
      publisher: ''
    },

    contents: [] as string[],
    similarBooks: [] as string[]
  };

}