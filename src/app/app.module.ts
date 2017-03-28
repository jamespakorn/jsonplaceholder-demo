import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { ConfigPage } from '../pages/config/config';
import { UserDetailPage } from '../pages/user-detail/user-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    UsersPage,
    ConfigPage,
    UserDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    UsersPage,
    ConfigPage,
    UserDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
