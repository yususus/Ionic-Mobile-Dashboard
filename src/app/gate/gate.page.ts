// gate.page.ts
import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-gate',
  templateUrl: 'gate.page.html',
 
})
export class GatePage {
  selectedGate: string = '';

  constructor(private navigationService: NavigationService) { }

  // Seçim değiştiğinde bu metod çalışır
  onChangeColor() {
    console.log('Selected Gate:', this.selectedGate);
  }
  onChangeGate() {
    console.log('Selected Gate:', this.selectedGate);
  }

  login() {
    this.navigationService.navigateToGate1();
  }

  back() {
    this.navigationService.navigateBack();
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

}