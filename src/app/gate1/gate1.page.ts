import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-gate1',
  templateUrl: './gate1.page.html',
  styleUrls: ['./gate1.page.scss'],
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

  constructor(private router: Router, private navCtrl: NavController) { }

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
   
    this.router.navigateByUrl('/gate1');
  }

  back() {

    this.clearForm();
    this.navCtrl.back();
  }
  selectGate(){
    this.navCtrl.navigateForward('/gate')
  }
  goToGate2() {
    this.navCtrl.navigateForward('/gate2');
  }
  exit(){
    this.router.navigateByUrl('');
  }
  
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
}