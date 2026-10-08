import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics-header',
  imports: [],
  templateUrl: './statistics-header.html',
  styleUrl: './statistics-header.css'
})
export class StatisticsHeader {

  secilenDonem = 'Son 1 Yıl';
  menuAcik = false;

  donemSec(donem: string): void {
    this.secilenDonem = donem;
    this.menuAcik = false;
  }

}