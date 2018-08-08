// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component } from '@angular/core';
import { AlertController, App, LoadingController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'signup-one',
  templateUrl: 'signup-one.html',
})
export class SignUpOnePage {

  //public loginForm: any;
  // public backgroundImage = 'assets/img/background/bg01.png';

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App
  ) { }


}
