import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import {AuthProvider } from '../../providers/auth/auth'


=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';



/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
<<<<<<< HEAD
    user =[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private googlePlus: GooglePlus,public loadCtrl:LoadingController,private storage: Storage,public auth:AuthProvider) {

    
let load = this.loadCtrl.create({
  content:"plzzz waitt"
});
load.present();
    this.storage.get('token').then(res =>{
      this.auth.getMentorProfile(res.id)
      .subscribe(res => {
        let data = res;
        if(data.msg=="err"){
          this.auth.getStudentProfile(res.id).subscribe(res => {
            load.dismiss()
            this.user = res;
            console.log(this.user)
          },(err)=> load.dismiss())
        }
        load.dismiss()
        this.user = res
      },(err)=> load.dismiss())
    },err => {
      load.dismiss();
      console.log(err)
    })
    .catch((err)=> load.dismiss())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
logout(){
  let load = this.loadCtrl.create({
    content:"plz wait.."
  });
  load.present();
  // this.googlePlus.logout()
  // .then(res=>{
    load.dismiss();
  this.storage.remove('token').then((res =>{
    this.navCtrl.setRoot("LoginPage")
  }))
  // },(err)=>{
  //   console.log(err)
  // })
}
=======

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private googlePlus: GooglePlus) {
  }

 logout(){
     this.googlePlus.logout()
     .then((res)=> {
       this.storage.remove('user')
       .then(()=>{
         this.navCtrl.setRoot("LoginPage")
       })
     }).catch((err)=>{
      this.navCtrl.setRoot("LoginPage")      
     })
 }
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312
}
