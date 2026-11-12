import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteSavedList } from './favorite-saved-list';

describe('FavoriteSavedList', () => {
  let component: FavoriteSavedList;
  let fixture: ComponentFixture<FavoriteSavedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteSavedList],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteSavedList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
