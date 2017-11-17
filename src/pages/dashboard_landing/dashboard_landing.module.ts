import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';
import { DashboardLandingPage } from './dashboard_landing';

@NgModule({
  declarations: [
    DashboardLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardLandingPage),
    SharedModule
  ]
})

export class DashboardLandingPageModule { 

}
