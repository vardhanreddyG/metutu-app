import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,MenuController,ModalController,ToastController} from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home'
import {DataProvider } from '../../providers/data/data'


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   load
  constructor(public navCtrl: NavController, public navParams: NavParams,private googlePlus: GooglePlus,public loadCtrl:LoadingController,private storage: Storage,public menu:MenuController,public modalCtrl: ModalController,public data: DataProvider,private toastCtrl: ToastController) {
  }
  ionViewDidEnter(){
    this.menu.swipeEnable(false,'menu1');
    
  }

  login(){
    //loading
    let load = this.loadCtrl.create({
      content:"Authenticating"
    });
    load.present();
  this.googlePlus.login({})
  .then((user)=>{
    load.dismiss();
    this.storage.set('user',{
      name: user.displayName,
      email: user.email,
      picture: user.imageUrl
    })
    .then(()=> this.navCtrl.setRoot(HomePage),(err)=> console.log(err))
  },(err)=> {
    alert("authentication failed")
    load.dismiss()
  });
  
  }
signup(){
  let load = this.loadCtrl.create({
    content:"Authenticating"
  });
  load.present();
this.googlePlus.login({})
.then((user)=>{
  load.dismiss();
  let modal = this.modalCtrl.create("SignupPage",{
    image:user.imageUrl,
    name: user.displayName,
    email:user.email
  });
  modal.onDidDismiss(User => {
    if(User){
      this.data.signup(User).subscribe(res => {
        let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        console.log(User)
        this.navCtrl.setRoot(HomePage)
        
        console.log(res.json());
      },(err)=>{
        let toast = this.toastCtrl.create({
          message: 'signupfailed',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      });     
     
    }
  });
  modal.present()
},(err)=> {
  alert("authentication failed")
  load.dismiss()
});

}
showLoader(){
  
         this.load = this.loadCtrl.create({
             content: 'Authenticating...'
         });
  
         this.load.present();
  
     }
}
