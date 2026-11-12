
import {
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Kitap {
  kitapAdi: string;
  yazar: string;
  kitapFoto: string;
  [key: string]: any;
}

interface OduncKaydi {
  kitapAdi: string;
  oduncTarihi: string;
  iadeTarihi: string;
}

@Component({
  selector: 'app-analysis-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analysis-list.html',
  styleUrl: './analysis-list.css',
})
export class AnalysisList implements OnInit {
  kitaplar: (Kitap & { oduncSayisi: number })[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('AnalysisList başlatıldı');

    this.http.get<Kitap[]>('/kitaplar.json').subscribe({
      next: (veriler) => {
        console.log('Kitap JSON verisi:', veriler);

        this.kitaplar = veriler.map((kitap) => ({
          ...kitap,
          oduncSayisi: 0,
        }));

        this.cdr.markForCheck();

        console.log(
          'Ekrana aktarılacak kitap sayısı:',
          this.kitaplar.length
        );

        this.http
          .get<OduncKaydi[]>('/odunc-alma.json')
          .subscribe({
            next: (kayitlar) => {
              const bugun = new Date();
              const ucAyOnce = new Date(bugun);
              ucAyOnce.setMonth(ucAyOnce.getMonth() - 3);

              this.kitaplar = this.kitaplar
                .map((kitap) => {
                  const oduncSayisi = kayitlar.filter(
                    (kayit) => {
                      const tarih = new Date(
                        `${kayit.oduncTarihi}T00:00:00`
                      );

                      return (
                        kayit.kitapAdi === kitap.kitapAdi &&
                        !isNaN(tarih.getTime()) &&
                        tarih >= ucAyOnce &&
                        tarih <= bugun
                      );
                    }
                  ).length;

                  return { ...kitap, oduncSayisi };
                })
                .sort(
                  (a, b) =>
                    b.oduncSayisi - a.oduncSayisi
                );

              this.cdr.markForCheck();

              console.log(
                'Ödünç sayıları hesaplandı:',
                this.kitaplar
              );
            },
            error: (hata) => {
              console.error(
                'Ödünç dosyası yüklenemedi:',
                hata
              );
            },
          });
      },
      error: (hata) => {
        console.error(
          'Kitap dosyası yüklenemedi:',
          hata
        );
      },
    });
  }
}
