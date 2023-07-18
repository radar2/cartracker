import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { TrackingModule } from './tracking/tracking.module';
import { MarkerService } from './tracking/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { PopuprService } from './tracking/popupr.service';

const routes:Routes = [
  {
    path:"",
    redirectTo:"dashboard",
    pathMatch:"full"
  },
  {
    path:"dashboard",
    loadChildren:()=>import("./dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path:"tracking",
    loadChildren:()=>import("./tracking/tracking.module").then(m=>m.TrackingModule)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    DashboardModule,
    HttpClientModule,
    TrackingModule
  ],
  providers: [MarkerService, PopuprService],
  bootstrap: [AppComponent]
})
export class AppModule { }
