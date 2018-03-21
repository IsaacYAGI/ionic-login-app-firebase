import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild ("username") uname;
  @ViewChild ("password") password;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn(){
    //console.log(this.uname.value,this.password.value);

    if (this.uname.value == "admin" && this.password.value == "admin"){
      //console.log("Sucess logged in");
      let alert = this.alertCtrl.create({
        title: 'Login',
        subTitle: "Sucess logged in",
        buttons: ['OK']
      });
      alert.present();
    }else{
      //console.log("Error, the user or password is incorrect.");
      let alert = this.alertCtrl.create({
        title: 'Login',
        subTitle: "Error, the user or password are incorrect.",
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
