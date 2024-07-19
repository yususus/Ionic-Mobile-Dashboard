// navigation.service.ts

import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private navCtrl: NavController) { }

  navigateToGate1() {
    this.navCtrl.navigateForward('/gate1');
  }

  navigateBack() {
    this.navCtrl.back();
  }

  navigateToGate() {
    this.navCtrl.navigateForward('/gate');
  }

  navigateToGate2() {
    this.navCtrl.navigateForward('/gate2');
  }

  exitApp() {
    this.navCtrl.navigateRoot('');
  }
}
