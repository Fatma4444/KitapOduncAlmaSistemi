import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shared-back-button',
  imports: [],
  templateUrl: './shared-back-button.html',
  styleUrl: './shared-back-button.css',
})
export class SharedBackButton {

  @Input() color = '#18334f';

  constructor(private location: Location) {}

  geriDon() {
    this.location.back();
  }
}