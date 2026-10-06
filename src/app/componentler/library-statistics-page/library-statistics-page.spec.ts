import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryStatisticsPage } from './library-statistics-page';

describe('LibraryStatisticsPage', () => {
  let component: LibraryStatisticsPage;
  let fixture: ComponentFixture<LibraryStatisticsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryStatisticsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryStatisticsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
