import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteSituation } from './favorite-situation';

describe('FavoriteSituation', () => {
  let component: FavoriteSituation;
  let fixture: ComponentFixture<FavoriteSituation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteSituation],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteSituation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
