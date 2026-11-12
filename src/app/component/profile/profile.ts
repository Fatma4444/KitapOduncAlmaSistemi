import { Component } from '@angular/core';
import { ProfileHeader } from './profile-header/profile-header';
import { ProfileInformation } from './profile-information/profile-information';
import { ProfileCategories } from './profile-categories/profile-categories';
import { MembershipStatus } from './membership-status/membership-status';

@Component({
  imports: [ProfileHeader, ProfileInformation, ProfileCategories, MembershipStatus],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {}
