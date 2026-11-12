import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-profile-header',
  styleUrl: './profile-header.css',
  templateUrl: './profile-header.html',
})
export class ProfileHeader {

  constructor(private router:Router){}

  geriDoN(){
      this.router.navigate(['/']);
  }
}
