import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';


@Component({
  selector: 'app-gate1',
  templateUrl: './gate1.page.html',
  
})
export class Gate1Page implements OnInit {

  plaka: string = '';
  dorsePlaka: string = '';
  konteynerNo: string = '';
  isoKod: string = '';
  payl: string = '';
  seal: string = '';
  dara: number;
  gumrukMuhuru: string = '';
  hasarDurumu: string = 'hasarsız'; // Default hasar durumu

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    // Ensure form is cleared when component initializes
    this.clearForm();
  }

  // Function to clear form data
  clearForm() {
    this.plaka = '';
    this.dorsePlaka = '';
    this.konteynerNo = '';
    this.isoKod = '';
    this.payl = '';
    this.seal = '';
    this.dara = null;
    this.gumrukMuhuru = '';
    this.hasarDurumu = 'hasarsız'; // Set to default value
  }

  
  login() {
    this.navigationService.navigateToGate1();
  }
  
  back() {
    this.clearForm();
    this.navigationService.navigateBack();
  }

  selectGate(){
    this.navigationService.navigateToGate();
  }
  goToGate2() {
    this.navigationService.navigateToGate2();
  }
  exit(){
    this.navigationService.exitApp();
  }
  
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
}