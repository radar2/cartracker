import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { LiveComponent } from './live/live.component';

const routes:Routes = [
  {
    path:"tracking",
    component:MainLayoutComponent,
    children:[
      {
        path:"live",
        component:LiveComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MapComponent,
    LiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TrackingModule { }
