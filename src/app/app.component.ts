<<<<<<< HEAD
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

=======
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:String

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage) {
    platform.ready().then(() => {
      this.storage.get('token')
      .then(res => {
        this.rootPage ="TabPage"
      },(err)=>{
        this.rootPage ="LoginPage"
      })
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

=======
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";
name;
image;
  pages: Array<{title: string, component: any,icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private storage: Storage,public loadCtrl:LoadingController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage ,icon:'home'},
      { title: 'About', component: ListPage, icon: 'information-circle'},
      { title: 'profile', component: "ProfilePage", icon: 'contact'},
      
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      let load = this.loadCtrl.create({
        content:"Authenticating"
      });
      load.present();
      this.storage.get('user').then((res)=>{
        this.image = res.picture 
        this.name = res.name
        
        console.log(res)
        load.dismiss();
        this.nav.setRoot(HomePage)
      },(err)=>{
        console.log("not authenticated")
        load.dismiss();
      })
      .catch((err)=>{
        load.dismiss(); 
        alert(" plz login")
              
      })
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312
