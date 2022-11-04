import { Component, DoCheck, OnInit } from '@angular/core';
import { BuyService } from './../buy.service';




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
constructor(private buyService: BuyService){}
ngOnInit() {

}

  ngDoCheck(){
    this.buyArray= this.buyService.buyData
    console.log(this.buyArray)
    this.lenOfbuyArray = this.buyArray.length
     for(;this.i<this.buyArray.length;this.i++){
    this.totalAmount = this.totalAmount + this.buyArray[this.i].price
}

}
}
