import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapBookInfo } from './map-book-info';

describe('MapBookInfo', () => {
  let component: MapBookInfo;
  let fixture: ComponentFixture<MapBookInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapBookInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(MapBookInfo);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('book', {
      title: 'Test Kitabı',
      authors: ['Test Yazar'],
      coverImage: '',
      faculty: 'Test Fakültesi',
      department: 'Test Bölümü',
      floor: '1. Kat',
      shelf: 'A1',
      bookcase: 'A',
      shelfNumber: 1,
      inventoryNumber: '0000001',
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
