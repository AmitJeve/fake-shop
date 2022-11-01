import { BuyService } from './../buy.service';
import { Router } from '@angular/router';

import { Component, DoCheck, Input, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements DoCheck, OnInit {
buyArray:any=[]

totalAmount:number=0
i:number=0
constructor(private buyService: BuyService,private route:Router){}
ngOnInit() {
    this.buyArray= this.buyService.buyData
}

  ngDoCheck(){
  for(let data of this.buyArray){
    for(;this.i<data.length;this.i++){
    this.totalAmount = this.totalAmount + data[this.i].price
  }
}
  // console.log(this.totalAmount)
  // console.log(this.buyArray.length)
}

}
