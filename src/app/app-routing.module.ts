import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'peluqueria',
    loadChildren: () => import('./peluqueria/peluqueria.module').then( m => m.PeluqueriaPageModule)
  },
  {
    path: 'peluquero',
    loadChildren: () => import('./peluquero/peluquero.module').then( m => m.PeluqueroPageModule)
  },  {
    path: 'turno',
    loadChildren: () => import('./turno/turno.module').then( m => m.TurnoPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
