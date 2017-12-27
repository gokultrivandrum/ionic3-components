import { SignUpDemoPage } from './sign-up';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    SignUpDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpDemoPage),
    SharedModule
  ],
  exports: [
    SignUpDemoPage
  ]
})

export class SignUpDemoPageModule { }
