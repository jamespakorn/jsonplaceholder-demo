import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Users {
  strApi: string;

  constructor(public http: Http) {
    this.strApi = localStorage.getItem('server-api');
  }


  getUsers1(): Observable<any> {
    return this.http.get(`${this.strApi}/users`)
      .map(res => <any>res.json());

  }


  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.strApi}/users`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        })
    })
  }

}
