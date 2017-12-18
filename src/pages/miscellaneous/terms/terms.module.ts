import { TermsPage } from './terms';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    TermsPage,
  ],
  imports: [
    IonicPageModule.forChild(TermsPage),
    SharedModule
  ],
  exports: [
    TermsPage
  ]
})

export class TermsPageModule { }
