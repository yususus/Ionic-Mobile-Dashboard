import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenulerPage } from './menuler.page';

const routes: Routes = [
  {
    path: '',
    component: MenulerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenulerPageRoutingModule {}
