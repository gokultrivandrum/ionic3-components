import { SignUpOnePage } from './signup-one';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SignUpOnePage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpOnePage),
  ],
  exports: [
    SignUpOnePage
  ]
})

export class SignUpOnePageModule { }
