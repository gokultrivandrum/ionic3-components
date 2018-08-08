import { NavController, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'signup.html'
})
export class SignUpListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'SignUpListPage';
    this.items = [
      {
        title: 'Sign Up',
        page:  'SignUpOnePage'
      }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
