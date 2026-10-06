import { Component } from '@angular/core';
import { ProfileHeader } from './profile-header/profile-header';

@Component({
  imports: [ProfileHeader],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {}
