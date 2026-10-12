
import { Component } from '@angular/core';

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

  membership: MembershipInfo = {
    title: 'Üyelik Bilgilerim',
    status: 'Aktif',
    active: true
  };

}
