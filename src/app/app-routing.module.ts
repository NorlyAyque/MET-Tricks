import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'length',
    loadChildren: () => import('./pages/length/length.module').then( m => m.LengthPageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./pages/temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'time',
    loadChildren: () => import('./pages/time/time.module').then( m => m.TimePageModule)
  },
  {
    path: 'volume',
    loadChildren: () => import('./pages/volume/volume.module').then( m => m.VolumePageModule)
  },
  {
    path: 'memory',
    loadChildren: () => import('./pages/memory/memory.module').then( m => m.MemoryPageModule)
  },
  {
    path: 'weight',
    loadChildren: () => import('./pages/weight/weight.module').then( m => m.WeightPageModule)
  },
  {
    path: 'bmi',
    loadChildren: () => import('./pages/bmi/bmi.module').then( m => m.BMIPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
