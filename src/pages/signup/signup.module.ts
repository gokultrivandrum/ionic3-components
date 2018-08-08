import { SignUpListPage } from './signup';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SignUpListPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpListPage),
  ],
  exports: [
    SignUpListPage
  ]
})

export class SignUpListPageModule { }
