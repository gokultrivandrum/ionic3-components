import { PrivacyPage } from './privacy';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    PrivacyPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivacyPage),
    SharedModule
  ],
  exports: [
    PrivacyPage
  ]
})

export class PrivacyPageModule { }
