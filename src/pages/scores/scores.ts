import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Arr from '../../app/LoginArray';
import {HomePage} from '../home/home';
/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {
  
  teamA:string;
  teamB:string;
  aScore=0;
  hScore=0;
  // team;
  arr2 = Arr;
  Score= [];
 

  choose(B):any{
    this.teamA = B;
  }

 //Try Method used to add 5points.
  try(){
    if(this.teamA =="T"){
      this.aScore += 5;
    }
    else{
      this.hScore += 5;
    }
  }

  //Try undo method.
  tryUndo(){
    if(this.teamA == "T"){
      this.aScore -= 5;
    }
    else {
      this.hScore -= 5;
    }
  }

    //Penalty Method used to add 3points
    Penalty(){
      if(this.teamA =="T"){
        this.aScore += 3;
      }
      else {
        this.hScore +=3;
      }
    }

    //Undo penalty method
    undoPen(){
      if(this.teamA == "T"){
        this.aScore -= 3;
      }
      else {
        this.hScore -= 3;
      }
    }
    //conversion method used to add 2points
    conversion(){
      if(this.teamA =="T"){
        this.aScore += 2;
      }
      else {
        this.hScore +=2;
      }
    }
    //undo conversion method 
    undoCon(){
      if(this.teamA =="T"){
        this.aScore -= 2;
      }
      else {
        this.hScore -=2;
      }
    }

    Restart(a: any){
      Arr.splice(a, 1)
      this.navCtrl.push(HomePage);
    }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
  }

}
