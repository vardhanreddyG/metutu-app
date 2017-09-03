import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams,ModalController ,LoadingController,ToastController} from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import {AuthProvider } from '../../providers/auth/auth'
import { Storage } from '@ionic/storage';


=======
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
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
<<<<<<< HEAD
   token:any
  loading:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,private googlePlus: GooglePlus,public loadCtrl:LoadingController,public toCtrl:ToastController,public auth:AuthProvider,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
         let cre = {
           email:"xtegg@gmai.com"
         }
         //loading
         this.showLoader();
         this.googlePlus.login({})
         .then((res)=>{
           let  u = {
             email:res.email
           };
               //checking first students db
    this.auth.studentLogin(cre)
    .subscribe(res =>{
      let body = res.json();
      if(body.msg == "ok"){
        
        this.storage.set('token',{
          email:body.email,
          id:body.id
        })
        .then(res => {
          this.loading.dismiss()
          //redirect home
          this.navCtrl.setRoot("TabPage");
         //toast
         let toast = this.toCtrl.create({
           message:"login sucess",
           duration:3000
         });
         toast.present();
        })
      }
      if(body.msg =="err"){
         this.auth.mentorLogin(cre)
         .subscribe( res => {
           let body = res.json();
           if(body.msg=="ok"){
             this.storage.set('token',{
              email:body.email,
              id:body.id
            })
             .then(res => {
               //redirect home
               this.navCtrl.setRoot("TabPage");
              //toast
              let toast = this.toCtrl.create({
                message:"login sucess",
                duration:3000
              });
              toast.present();
             })
           }
           if(body.msg=="err"){
             this.loading.dismiss()
            let toast = this.toCtrl.create({
              message:"user not found",
              duration:3000
            });
            toast.present();
           }
         })
      }
    })
         }).catch((err)=> console.log(err))
  }
signup(){
  this.googlePlus.login({}).then(res => {
    let modal = this.modalCtrl.create("SsignupPage",{
      name:res.displayName,
      email:res.email,
      image:res.imageUrl
    });    
  })
  let modal = this.modalCtrl.create("SsignupPage");
    modal.onDidDismiss(user =>{
      this.showLoader();
      console.log(user)
      if(user){
        if(user.role.student==true){
          this.auth.studentSignup(user)
          .subscribe(res =>{
            let body = res.json();
            console.log(res)
            this.loading.dismiss()
            //check response
            if(body.msg=="found"){
              let toast = this.toCtrl.create({
                message:"user already exists",
                duration:3000
              });
              toast.present();
            }
            //checking response
            if(body.msg=="ok"){
              this.storage.set('token',{
                email:body.email,
                id:body.id
              })
              .then(res => {
                this.loading.dismiss()
                //redirect home
                this.navCtrl.setRoot("TabPage");
               //toast
               let toast = this.toCtrl.create({
                 message:"login sucess",
                 duration:3000
               });
               toast.present();
              })
            }
          },(err)=>{
            console.log(err)
          })
        }
        if(user.role.mentor==true){
          console.log("mentor")
          this.auth.mentorSignup(user)
          .subscribe(res =>{
            let body = res.json();
            this.loading.dismiss();
            //check response
            if(body.msg=="found"){
              let toast = this.toCtrl.create({
                message:"user already exists",
                duration:3000
              });
              toast.present();
            }
            //checking response
            if(body.msg=="ok"){
              this.storage.set('token',{
                email:body.email,
                id:body.id
              })
              .then(res => {
                this.loading.dismiss()
                //redirect home
                this.navCtrl.setRoot("TabPage");
               //toast
               let toast = this.toCtrl.create({
                 message:"login sucess",
                 duration:3000
               });
               toast.present();
              })
            }
          })
        }
      }
    })
  modal.present()
}
  

//loading function
showLoader(){
  this.loading = this.loadCtrl.create({
    content:"plz wait...."
  });
//start loading
this.loading.present();
}
=======
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
>>>>>>> d802e4fb63b16a94eafb061d993cf9bbeb481312
}
