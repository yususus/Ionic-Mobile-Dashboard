// gate.page.ts


import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gate',
  templateUrl: 'gate.page.html',
  styleUrls: ['gate.page.scss'],
})
export class GatePage {
  selectedGate: string = '';

  constructor(private router: Router) { }

  // Seçim değiştiğinde bu metod çalışır
  onChangeColor() {
    console.log('Selected Gate:', this.selectedGate);
  }

  login() {
    // Login işleminiz başarılı olduğunda yönlendirme yapabilirsiniz
    this.router.navigateByUrl('/gate1'); // '/dashboard' yerine istediğiniz sayfa yolunu verin
  }
  back() {
    const confirmLeave = confirm('Çıkmak istiyor musunuz?'); // Onaylama ile ilgili dialog kutusu
    if (confirmLeave) {
      this.router.navigateByUrl(''); // Onaylandığında auth-component sayfasına yönlendirme
    } else {
      // İsteğe bağlı: Kullanıcı iptal ederse (çıkmayı seçmezse) ne yapılacağını işleyin
      // Örneğin, bir mesaj gösterebilir veya başka bir işlem yapabilirsiniz.
    }
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

}