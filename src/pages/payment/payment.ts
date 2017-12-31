import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  public count: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
