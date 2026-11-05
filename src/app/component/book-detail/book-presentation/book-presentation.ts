
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-presentation',
  standalone: true,
  imports: [],
  templateUrl: './book-presentation.html',
  styleUrl: './book-presentation.css'
})
export class BookPresentation {

  @Input() kitap: any = null;

}
