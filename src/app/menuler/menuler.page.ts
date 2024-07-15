import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuler',
  templateUrl: './menuler.page.html',
  styleUrls: ['./menuler.page.scss'],
})
export class MenulerPage implements OnInit {

 // plaka: string = '';
 // dorsePlaka: string = '';
 // konteynerNo: string = '';
 // isoKod: string = '';
 // payl: string = '';
 // seal: string = '';
 // dara: number;
 // gumrukMuhuru: string = '';
 // hasarDurumu: string = 'hasarsız'; // Default hasar durumu

  constructor(private router: Router) { }

  ngOnInit() {
    // Ensure form is cleared when component initializes
    this.clearForm();
  }

  // Function to clear form data
  clearForm() {
   // this.plaka = '';
   // this.dorsePlaka = '';
   // this.konteynerNo = '';
   // this.isoKod = '';
   // this.payl = '';
   // this.seal = '';
   // this.dara = null;
   // this.gumrukMuhuru = '';
   // this.hasarDurumu = 'hasarsız'; // Set to default value
  }

  lg() {
    // Perform login actions
    // Navigate to '/gate1' or any other page after successful login
    this.router.navigateByUrl('/gate');
  }

  lg2() {
    // Perform login actions
    // Navigate to '/gate1' or any other page after successful login
    this.router.navigateByUrl('/gate1');
  }

  lg3() {
    // Perform login actions
    // Navigate to '/gate1' or any other page after successful login
    this.router.navigateByUrl('/gate2');
  }

  back() {
    // Clear form data when navigating back
   // this.clearForm();
    // Navigate back to '/gate' or any other previous page
    this.router.navigateByUrl('/gate1');
  }
  goToGate2() {
    this.router.navigateByUrl('/gate2');
  }
  
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  // Optional: Add functions for other buttons (tip(), tur(), imo(), kaydet(), etc.)
}
