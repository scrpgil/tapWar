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
    weight:number = 0;
    oHeight:string = "50%";
    tHeight:string = "50%";
    constructor(public alertCtrl: AlertController) {
        this.init();
    }
    init(){
        this.weight = 0;
        this.oHeight = "50%";
        this.tHeight = "50%";
    }
    one(){
        this.weight = this.weight + 2;
        this.setHeight();
        if(this.weight > 50){
            this.showAlert("one");
        }
    }
    two(){
        this.weight = this.weight - 2;
        this.setHeight();
        if(this.weight < -48){
            this.showAlert("two");
        }
    }
    setHeight(){
        var o = 50 + this.weight;
        var t = 100 - o;
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
