import { Component } from '@angular/core';
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
 
}
