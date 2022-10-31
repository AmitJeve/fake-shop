import { Component, DoCheck, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Data } from 'src/assets/data-interface';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements DoCheck {
@Input() buyArray:Data[]=[]
totalAmount:number=0

  ngDoCheck(){
  for(let i=0;i<this.buyArray.length;i++){
    this.totalAmount = this.totalAmount + this.buyArray[i].price
  }
  console.log(this.totalAmount)
  console.log(this.buyArray.length)
}

}
