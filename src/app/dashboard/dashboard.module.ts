import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes, RouterModule} from "@angular/router";
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

const routes:Routes = [
  {
    path:"dashboard",
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        component:DashboardComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
