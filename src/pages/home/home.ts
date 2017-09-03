import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider} from '../../providers/auth/auth'
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
mentors = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider) {
    this.auth.getMentors().subscribe(res => {
      this.mentors = res
      console.log(res)
    })
  }

  detail(m){
    this.navCtrl.push("DetailPage")
  }
=======
import { NavController,LoadingController } from 'ionic-angular';
import {DataProvider } from '../../providers/data/data'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    teachers = [];
    load;
  constructor(public navCtrl: NavController,private data:DataProvider) {

    this.data.getTechers().subscribe((res)=> this.teachers = res)

  }
 
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312
}
