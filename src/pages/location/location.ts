import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeGoogleMapsProvider } from '../../providers/native-google-maps/native-google-maps';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  @ViewChild('locationMap') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public mapsCtrl: NativeGoogleMapsProvider) {
  }

  // Load map only after view is initialized
  ngAfterViewInit() {
    this.mapsCtrl.create(this.mapElement).then(() => this.mapsCtrl.centerToGeolocation());
  }

  addMarker() {
    this.mapsCtrl.addMarkerToGeolocation('Click me!', this.callbackSample);
  }

  callbackSample() {
    alert('The callback was called :D');
  }

  goToPayment() {
    this.navCtrl.setRoot('PaymentPage');
  }
}
