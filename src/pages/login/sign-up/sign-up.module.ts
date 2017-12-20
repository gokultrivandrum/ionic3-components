import { SignUpDemoPage } from './sign-up';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SignUpDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpDemoPage),
  ],
  exports: [
    SignUpDemoPage
  ]
})

export class SignUpDemoPageModule { }
