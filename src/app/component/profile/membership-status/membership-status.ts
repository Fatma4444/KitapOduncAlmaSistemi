import { Component } from '@angular/core';
import profileData from '../profile.json';

interface MembershipInfo {
  title: string;
  status: string;
  active: boolean;
}

@Component({
  selector: 'app-membership-status',
  standalone: true,
  imports: [],
  templateUrl: './membership-status.html',
  styleUrl: './membership-status.css'
})
export class MembershipStatus {

  membership: MembershipInfo = profileData.membershipStatus;

}