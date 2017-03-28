import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: Users) { }

  

  ionViewWillEnter() {
    this.userProvider.getUsers()
      .then((data: any) => {
        this.users = data;
        console.log(data);
      }, (err) => {
        console.log(err);
      });

  }

  goDetail(user:any) {
    this.navCtrl.push(UserDetailPage,{user:user});
  }

}
