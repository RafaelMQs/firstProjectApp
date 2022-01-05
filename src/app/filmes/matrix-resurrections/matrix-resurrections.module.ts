import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatrixResurrectionsPageRoutingModule } from './matrix-resurrections-routing.module';

import { MatrixResurrectionsPage } from './matrix-resurrections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatrixResurrectionsPageRoutingModule
  ],
  declarations: [MatrixResurrectionsPage]
})
export class MatrixResurrectionsPageModule {}
