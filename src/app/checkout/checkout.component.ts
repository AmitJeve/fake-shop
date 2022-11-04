import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/assets/data-interface';
import { BuyService } from './../buy.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit{

  checkOutData:Data[]=[]
  totalAmount:number = 0
  buyArray:any=[]
  isValueChecked:boolean = true

  constructor(private dataservice:DataService,private route : Router, private buyservice:BuyService) {
  }

  ngOnInit(){
       this.checkOutData = this.dataservice.checkOutData
       this.buyArray = this.checkOutData
       this.buyservice.buyData= this.buyArray
       this.updateTotal()
  }

    isChecked(arg:any, event:any){

      if(event.target.checked){
          if(this.buyArray.filter((e:any)=> e.id === arg.id).length ===0){
              this.buyArray.push(arg)
          }
        this.buyservice.buyData= this.buyArray
      }

      if(!event.target.checked){
        this.buyArray= this.buyArray.filter((e:any)=>e.id != arg.id)
        console.log(this.buyArray)
        this.buyservice.buyData = this.buyArray

    }
    this.updateTotal()
    }

 onSelected(arg:any){
  this.route.navigate(['/buy'])
 }

 updateTotal(){
  let temp=0
  for(let i=0;i<this.buyArray.length;i++){
      temp = temp + this.buyArray[i].price
  }
  this.totalAmount= temp;
 }
}
