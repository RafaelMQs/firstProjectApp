import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatrixResurrectionsPage } from './matrix-resurrections.page';

const routes: Routes = [
  {
    path: '',
    component: MatrixResurrectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatrixResurrectionsPageRoutingModule {}
