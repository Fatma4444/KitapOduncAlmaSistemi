
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private readonly storageKey = 'favoriKitaplar';
  private readonly platformId = inject(PLATFORM_ID);

  private tarayicidaMi(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private favorileriGetir(): any[] {
    if (!this.tarayicidaMi()) {
      return [];
    }

    try {
      return JSON.parse(
        localStorage.getItem(this.storageKey) || '[]'
      );
    } catch {
      return [];
    }
  }

  favoriMi(kitapAdi: string): boolean {
    return this.favorileriGetir().some(
      kitap => kitap.kitapAdi === kitapAdi
    );
  }

  favorileriListele(): any[] {
    return this.favorileriGetir();
  }

  favoriyeEkleVeyaCikar(kitap: any): void {
    if (!this.tarayicidaMi()) {
      return;
    }

    const favoriler = this.favorileriGetir();

    const mevcut = favoriler.some(
      item => item.kitapAdi === kitap.kitapAdi
    );

    const yeniFavoriler = mevcut
      ? favoriler.filter(
          item => item.kitapAdi !== kitap.kitapAdi
        )
      : [...favoriler, kitap];

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(yeniFavoriler)
    );
  }
}
