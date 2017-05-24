import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    template: `
    <div class="battle">
      <button class="one" [style.height]="oHeight" (click)="one()">Player one</button>
      <button class="two" [style.height]="tHeight" (click)="two()">Player two</button>
    </div>
    `
})
export class HomePage {
    oStartVal:number = 50;
    tStartVal:number = 50;
    weight:number = 0;
    damage:number = 2;
    oHeight:string = "";
    tHeight:string = "";
    constructor(public alertCtrl: AlertController) {
        this.init();
    }
    init(){
        this.weight = 0;
        this.oHeight = this.oStartVal + "%";
        this.tHeight = this.tStartVal + "%";
    }
    one(){
        this.weight = this.weight + this.damage;
        this.setHeight();
        if(this.weight > this.oStartVal){
            this.showAlert("one");
        }
    }
    two(){
        this.weight = this.weight - this.damage;
        this.setHeight();
        if(this.weight < this.tStartVal * -1){
            this.showAlert("two");
        }
    }
    setHeight(){
        var o = this.oStartVal + this.weight;
        var t = this.oStartVal + this.tStartVal - o;
        this.oHeight = o + "%";
        this.tHeight = t + "%";
    }
    showAlert(winner) {
        let alert = this.alertCtrl.create({
            title: 'Game over',
            subTitle: 'Player ' + winner + 'wins the game',
            buttons: [{
                text: 'OK',
                handler: () => {
                    this.init();
                }
            }]
        });
        alert.present();
    }
}
