import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Config page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {

  server: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (localStorage.getItem('server-api') !== '') {
      this.server = localStorage.getItem('server-api');   
    }
  }

  setConfig() {

    localStorage.setItem('server-api', this.server);
    alert(localStorage.getItem('server-api'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}
