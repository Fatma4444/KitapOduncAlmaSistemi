import { Component } from '@angular/core';
import { ProfileHeader } from './profile-header/profile-header';
import { ProfileInformation } from './profile-information/profile-information';

@Component({
  imports: [ProfileHeader, ProfileInformation],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {}
