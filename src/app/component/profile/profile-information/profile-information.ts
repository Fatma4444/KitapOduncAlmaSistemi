import { Component } from '@angular/core';
import profileData from '../profile.json';

interface Profile {
  name: string;
  studentNumber: string;
  department: string;
  profileImage: string;
}

@Component({
  selector: 'app-profile-information',
  standalone: true,
  imports: [],
  templateUrl: './profile-information.html',
  styleUrl: './profile-information.css'
})
export class ProfileInformation {

  profile: Profile = profileData;

}