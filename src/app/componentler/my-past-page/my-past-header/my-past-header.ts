import { Component } from '@angular/core';
import { SharedBackButton } from '../../../common_component/shared-back-button/shared-back-button';

@Component({
  selector: 'app-my-past-header',
  standalone: true,
  imports: [SharedBackButton],
  templateUrl: './my-past-header.html',
  styleUrl: './my-past-header.css',
})
export class MyPastHeader {

}