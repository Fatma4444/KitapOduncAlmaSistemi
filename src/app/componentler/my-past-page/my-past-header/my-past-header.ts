
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-past-header',
  standalone: true,
  imports: [],
  templateUrl: './my-past-header.html',
  styleUrl: './my-past-header.css',
})
export class MyPastHeader {
  constructor(private router: Router) {}

  goBack(): void {
  this.router.navigateByUrl('/profile');
 }
}