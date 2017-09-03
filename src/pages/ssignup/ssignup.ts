import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the SsignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ssignup',
  templateUrl: 'ssignup.html',
})
export class SsignupPage {
 //user properties
 mobileNumber;
 mentor; 
 student;
nodejs;
reactNative;
purescript;
functionalProgramming;
description;
name;
email;
image
latitude;
longitude;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.name = this.navParams.get('name')
    this.email = this.navParams.get('email')
    this.image = this.navParams.get('image')
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SsignupPage');
  }
//save 
save():void{
  let user = {
    name:this.name,
    email:this.email,
    image:this.image,
    mobile:this.mobileNumber,
    role:{
      student:this.student,
      mentor:this.mentor
    },
    subjects:{
      nodejs:this.nodejs,
      purescript:this.purescript,
      reactNative:this.reactNative,
      functionalProgramming:this.functionalProgramming
    },
    location:{
      latitude:16.4676467,
      longitude:17.4746645621
    },
    description:this.description
  }

  //sending to login page
  this.viewCtrl.dismiss(user)
}
  //close function
close():void{
  this.viewCtrl.dismiss();
}

}
