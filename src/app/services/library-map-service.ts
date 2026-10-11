import { Injectable } from '@angular/core';

export interface MapBook {
    title: string;
    authors: string[];
    coverImage: string;
    faculty: string;
    department: string;
    floor: string;
    shelf: string;
    bookcase: string;
    shelfNumber: number;
    inventoryNumber: string;
}

export interface DirectionStep {
    text: string;
    distanceInMeters: number;
}

export interface BookMapInfo {
    bookId: number;
    book: MapBook;
    steps: DirectionStep[];
}

// Geçici (mock) veri. Canlı veri gelince bu liste silinecek.
const MOCK_MAP_DATA: BookMapInfo[] = [
    {
        bookId: 1,
        book: {
            title: 'Makine Öğrenmesi',
            authors: ['Dr. Elif Kaya', 'Dr. Mehmet Demir'],
            coverImage: '/images/images.jpg',
            faculty: 'Mühendislik Fakültesi',
            department: 'Bilgisayar Mühendisliği',
            floor: '2. Kat',
            shelf: 'B3',
            bookcase: 'B (Bilgisayar Mühendisliği)',
            shelfNumber: 3,
            inventoryNumber: '0045782',
        },
        steps: [
            { text: 'Bulunduğunuz konumdan sağa ilerleyin.', distanceInMeters: 10 },
            { text: 'Merdivenlerden 2. kata çıkın.', distanceInMeters: 15 },
            { text: 'Bilgisayar Mühendisliği kitaplık alanına gidin.', distanceInMeters: 20 },
            { text: 'B kitaplığında sağ taraftaki 3. rafa ulaşın.', distanceInMeters: 5 },
        ],
    },
    {
        bookId: 2,
        book: {
            title: 'Anna Karenina',
            authors: ['Lev Tolstoy'],
            coverImage: '/images/anna-karenina.jpg',
            faculty: 'Merkez Kütüphane',
            department: 'Dünya Edebiyatı',
            floor: 'Zemin Kat',
            shelf: 'A1',
            bookcase: 'A (Dünya Edebiyatı)',
            shelfNumber: 1,
            inventoryNumber: '0012345',
        },
        steps: [
            { text: 'Girişten düz ilerleyin.', distanceInMeters: 8 },
            { text: 'Sol taraftaki A kitaplığına gidin.', distanceInMeters: 12 },
            { text: 'A kitaplığının 1. rafına ulaşın.', distanceInMeters: 3 },
        ],
    },
];

@Injectable({
    providedIn: 'root',
})
export class LibraryMapService {
    getMapInfo(bookId: number): BookMapInfo | undefined {
        return MOCK_MAP_DATA.find((item) => item.bookId === bookId);
    }
}