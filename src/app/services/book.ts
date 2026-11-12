import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { of, tap } from 'rxjs';

const BOOKS_KEY = makeStateKey<any[]>('kitaplar');

@Injectable({
  providedIn: 'root'
})
export class Book {

  private transferState = inject(TransferState);
  private platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient) {}

  getBooks() {

    const storedBooks = this.transferState.get(BOOKS_KEY, null);

    if (storedBooks) {
      this.transferState.remove(BOOKS_KEY);
      return of(storedBooks);
    }

    return this.http.get<any[]>('/kitaplar.json').pipe(
      tap(data => {
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(BOOKS_KEY, data);
        }
      })
    );
  }

}