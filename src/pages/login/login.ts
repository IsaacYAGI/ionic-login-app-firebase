import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild ("username") uname;
  @ViewChild ("password") password;

  constructor(private firebase:AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser(){
    this.firebase.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
    .then(data =>{
      console.log("Success logged in!");
      this.alert('Successfully loggedin!');
      this.navCtrl.setRoot(LoggedinPage);
      //this.navCtrl.push(LoggedinPage);
    })
    .catch(error =>{
      console.log("Error: ",error.message);
      this.alert(error.message);
    });
    console.log("User credentials: ",this.uname.value, " ", this.password.value);
  }
}
