import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
name;
image;
email;
role;
mobile;
nodejs;
purescript;
latitude
longitude;
fp
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation,public viewCtrl:ViewController) {
    this.name = this.navParams.get('name');
    this.email = this.navParams.get('email');
    this.image = this.navParams.get('image')
    
    this.geolocation.getCurrentPosition().then((resp) => {
      alert(resp.coords.longitude + resp.coords.latitude)
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }

  ionViewDidLoad() {
  }
save():void{
    let User= {
      Name:this.name,
      Email:this.email,
      MobileNumber:this.mobile,
      Role:this.role,
      Subjects:{
       Nodejs:this.nodejs,
       Purescript:this.purescript,
       fp:this.fp
      },
      Location:{
        Latitude:this.latitude,
        Longitude:this.longitude
      }
    };
    this.viewCtrl.dismiss(User)
}
//close
close(): void {
  this.viewCtrl.dismiss();
}
}
