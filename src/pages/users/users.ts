import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Users } from '../../providers/users';
import { UserDetailPage } from '../user-detail/user-detail';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [Users]
})
export class UsersPage {

  users: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: Users,
    public loadingCtrl: LoadingController) { }

  

  ionViewWillEnter() {

    let loading = this.loadingCtrl.create({
      content: 'กรุณารอซักครู่...',
      spinner: 'ios'

    });
    loading.present();

    this.userProvider.getUsers()
      .then((data: any) => {
        this.users = data;
        console.log(data);
        loading.dismiss();
      }, (err) => {
        if (err.status ==404) {
          alert('ไม่พบข้อมูล/ตรวจสอบการเชื่อมต่อ server')
        } else {
          alert('ตรวจสอบการเชื่อมต่ออินเตอร์เน็ต')
        }
        console.log(err);
        loading.dismiss();

      });

  }

  // ionViewWillEnter() {

  //   let loading = this.loadingCtrl.create({
  //     content: 'กรุณารอซักครู่...',
  //     spinner: 'ios'

  //   });
  //   loading.present();

  //   this.userProvider.getUsers1()
  //     .subscribe((data) => {
  //       this.users = data;
  //       console.log(data);
  //       loading.dismiss();
  //     }, err => {
  //       if (err.status == 404) {
  //         alert('ไม่พบข้อมูล/ตรวจสอบการเชื่อมต่อ server')
  //       } else {
  //         alert('ตรวจสอบการเชื่อมต่ออินเตอร์เน็ต')
  //       }
  //       console.log(err);
  //       loading.dismiss();
  //     })
  // }

  goDetail(user: any) {
    this.navCtrl.push(UserDetailPage, { user: user });
  }

}
