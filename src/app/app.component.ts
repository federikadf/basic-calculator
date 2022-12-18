import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  operatorA:number=0;
  operatorB:number= 0;
  answer:number= 0;

  onSum():void {
    this.answer = this.operatorA + this.operatorB
  }

  onSubs():void {
    this.answer = this.operatorA - this.operatorB
  }

  onMult():void {
    this.answer = this.operatorA * this.operatorB
  }
  onDiv():void {
    this.answer = this.operatorA / this.operatorB
  }
}
