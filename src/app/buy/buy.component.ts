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
lenOfbuyArray:number=0
totalAmount:number=0
i:number=0
constructor(private buyService: BuyService,private route:Router){}
ngOnInit() {
    this.buyArray= this.buyService.buyData
}

  ngDoCheck(){
    console.log(this.buyArray)
    this.lenOfbuyArray = this.buyArray.length
     for(;this.i<this.buyArray.length;this.i++){
    this.totalAmount = this.totalAmount + this.buyArray[this.i].price
}

}
}
