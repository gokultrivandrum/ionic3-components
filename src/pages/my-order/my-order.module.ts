import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyOrderPage } from './my-order';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    MyOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(MyOrderPage),
    SharedModule
  ],
})
export class MyOrderPageModule {}
