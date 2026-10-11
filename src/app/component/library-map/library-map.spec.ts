import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryMap } from './library-map';

describe('LibraryMap', () => {
  let component: LibraryMap;
  let fixture: ComponentFixture<LibraryMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryMap],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
