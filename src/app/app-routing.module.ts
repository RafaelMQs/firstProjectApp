import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'spiderman-no-way-home',
    loadChildren: () => import('./filmes/spiderman-no-way-home/spiderman-no-way-home.module').then( m => m.SpidermanNoWayHomePageModule)
  },
  {
    path: 'resident-evil-raccoon-city',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./filmes/resident-evil-raccoon-city/resident-evil-raccoon-city.module').then( m => m.ResidentEvilRaccoonCityPageModule)
  },
  {
    path: 'matrix-resurrections',
    loadChildren: () => import('./filmes/matrix-resurrections/matrix-resurrections.module').then( m => m.MatrixResurrectionsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
