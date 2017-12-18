import { MiscellaneousListPage } from './miscellaneous';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    MiscellaneousListPage,
  ],
  imports: [
    IonicPageModule.forChild(MiscellaneousListPage),
    SharedModule,
  ],
  exports: [
    MiscellaneousListPage
  ]
})

export class MiscellaneousListPageModule { }
