import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPastPage } from './my-past-page';

describe('MyPastPage', () => {
  let component: MyPastPage;
  let fixture: ComponentFixture<MyPastPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPastPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPastPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
