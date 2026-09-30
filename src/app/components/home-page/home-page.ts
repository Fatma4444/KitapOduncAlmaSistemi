import { Component } from '@angular/core';
import { BookSearch } from './book-search/book-search';
import { GeneralInformation } from './general-information/general-information';
import { QuickAccess } from './quick-access/quick-access';
import { TopMenu } from './top-menu/top-menu';
import { WorkArea } from './work-area/work-area';
import { Footer } from './footer/footer';

@Component({
  imports: [BookSearch, GeneralInformation, QuickAccess, TopMenu, WorkArea, Footer],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {

}
