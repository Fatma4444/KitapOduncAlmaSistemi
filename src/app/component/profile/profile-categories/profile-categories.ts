import { Component } from '@angular/core';
import profileData from '../profile.json';

interface ProfileCategory {
  title: string;
  count: number | null;
  icon: string;
}

@Component({
  selector: 'app-profile-categories',
  standalone: true,
  imports: [],
  templateUrl: './profile-categories.html',
  styleUrl: './profile-categories.css'
})
export class ProfileCategories {

  categories: ProfileCategory[] = profileData.categories;

}