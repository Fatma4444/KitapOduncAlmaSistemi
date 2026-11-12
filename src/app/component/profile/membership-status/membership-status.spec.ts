import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembershipStatus } from './membership-status';

describe('MembershipStatus', () => {
  let component: MembershipStatus;
  let fixture: ComponentFixture<MembershipStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(MembershipStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
