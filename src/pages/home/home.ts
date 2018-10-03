import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {ScoresPage} from '../scores/scores';
import { signUp } from '../../app/login2Array';
import Arr from '../../app/LoginArray';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Arr = [];
  
  teamA:string;
  teamB:string;
  aScore:number = 0;
  hScore:number = 0;
  
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
  }
  login(teamA,teamB){
    if(this.teamA == ""){
      const alert = this.alertCtrl.create({
        title: 'Warning!',
        message: 'Please enter a team name',
        buttons: ['OK']
      });
      alert.present();
    }
    else if(this.teamB == ""){
      const alert = this.alertCtrl.create({
        title: 'Warning!',
        message: 'Please enter a team name',
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      let obj = new signUp(teamA,teamB);
      Arr.push(obj);
       //alert(this.signUpArr);
      console.log(Arr);
      this.navCtrl.push(ScoresPage);
    }
   
  }
}
