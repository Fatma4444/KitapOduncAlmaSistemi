import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPastHeader } from './my-past-header';

describe('MyPastHeader', () => {
  let component: MyPastHeader;
  let fixture: ComponentFixture<MyPastHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPastHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPastHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
