import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gate2PageRoutingModule } from './gate2-routing.module';

import { Gate2Page } from './gate2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gate2PageRoutingModule
  ],
  declarations: [Gate2Page]
})
export class Gate2PageModule {}
