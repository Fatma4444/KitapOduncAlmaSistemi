import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-map-header',
  styleUrl: './map-header.css',
  templateUrl: './map-header.html',
})
export class MapHeader {
  private location = inject(Location);
  private router = inject(Router);

  goBack(): void {
    const cameFromInsideApp = this.router.lastSuccessfulNavigation()?.previousNavigation;

    if (cameFromInsideApp) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
