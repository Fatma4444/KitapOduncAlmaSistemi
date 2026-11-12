import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPastUserCard } from './my-past-user-card';

describe('MyPastUserCard', () => {
  let component: MyPastUserCard;
  let fixture: ComponentFixture<MyPastUserCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPastUserCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPastUserCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
