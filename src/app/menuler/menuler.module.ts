import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenulerPageRoutingModule } from './menuler-routing.module';

import { MenulerPage } from './menuler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenulerPageRoutingModule
  ],
  declarations: [MenulerPage]
})
export class MenulerPageModule {}
