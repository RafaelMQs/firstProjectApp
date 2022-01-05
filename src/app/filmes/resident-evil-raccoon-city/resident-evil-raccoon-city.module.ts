import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentEvilRaccoonCityPageRoutingModule } from './resident-evil-raccoon-city-routing.module';

import { ResidentEvilRaccoonCityPage } from './resident-evil-raccoon-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentEvilRaccoonCityPageRoutingModule
  ],
  declarations: [ResidentEvilRaccoonCityPage]
})
export class ResidentEvilRaccoonCityPageModule {}
