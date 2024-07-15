import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss'],
})
export class AuthComponentComponent implements OnInit {
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;
  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router) {
    this.formData = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit() {}

  change(event){
    this.screen = event;
  }
/*
  login(){
    var formData: any = new FormData();
    if(this.formData.valid){
      this.isLoading = true
      formData.append('email', this.formData.get('email').value);
      formData.append('password', this.formData.get('password').value);
      console.log(this.formData)
      this.auth.userLogin(formData).subscribe((data:any)=>{
        console.log(data);
      });
    }  
  }*/
    login() {
      // Login işleminiz başarılı olduğunda yönlendirme yapabilirsiniz
      this.router.navigateByUrl('/gate'); // '/dashboard' yerine istediğiniz sayfa yolunu verin
    }

    toggleDarkMode() {
      document.body.classList.toggle('dark');
    }
}