import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild ('username') userName;
  @ViewChild ('password') password;

  constructor(private firebase:AngularFireAuth, public alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(){
    this.firebase.auth.createUserWithEmailAndPassword(this.userName.value,this.password.value)
    .then(data =>{
      console.log("got data ", data);
      this.alert("User registered succesfully");
    })
    .catch(error =>{
      console.log("gotan error ", error);
      this.alert("Error: "+error.message);
    });
    console.log("New user credentials: ", this.userName.value, " ", this.password.value);
  }
}
