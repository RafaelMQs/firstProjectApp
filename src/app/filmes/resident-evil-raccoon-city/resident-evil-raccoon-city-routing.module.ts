import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentEvilRaccoonCityPage } from './resident-evil-raccoon-city.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentEvilRaccoonCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentEvilRaccoonCityPageRoutingModule {}
