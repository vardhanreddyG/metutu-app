import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
<<<<<<< HEAD
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http'
import { AuthProvider } from '../providers/auth/auth';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    MyApp,
=======
import { GooglePlus } from '@ionic-native/google-plus';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
=======
    HomePage,
    ListPage
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Geolocation
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    Geolocation,
    DataProvider
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312
  ]
})
export class AppModule {}
