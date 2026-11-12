import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteHeader } from './favorite-header';

describe('FavoriteHeader', () => {
  let component: FavoriteHeader;
  let fixture: ComponentFixture<FavoriteHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
