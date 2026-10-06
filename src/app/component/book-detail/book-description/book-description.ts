import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-description',
  standalone: true,
  imports: [],
  templateUrl: './book-description.html',
  styleUrl: './book-description.css'
})
export class BookDescription {

  @Input() kitap: any;

  activeTab: 'description' | 'contents' | 'similar' = 'description';

  showTab(tab: 'description' | 'contents' | 'similar') {
    this.activeTab = tab;
  }

}