import { BuyService } from './../buy.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/assets/data-interface';
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
  buyActive:Boolean=true
  checkedData:any=[]
  isValueChecked:boolean = true
  uniqueIds:any=[]
  i:number=0
  j:number=0

  constructor(private dataservice:DataService,private route : Router, private buyservice:BuyService) {
  }

  ngOnInit(){
       this.checkOutData = this.dataservice.checkOutData

  }


    isChecked(arg:any){
console.log(this.i)
      if(this.isValueChecked){
        this.buyActive=true;
        this.buyArray.push(arg)
        console.log(this.buyArray)

        for(;this.i<this.buyArray.length;this.i++){
          this.totalAmount= this.totalAmount + this.buyArray[this.i].price
        }
        console.log(this.i)
        this.buyservice.buyData= this.buyArray
      }

      if(!this.isValueChecked){
        this.i=0
        const id= arg.id
        const indexfin  = this.buyArray.findIndex((e:any)=>{
          if(e.id === id){
            return id;
          }
        })
        if(indexfin !=-1){
          this.totalAmount = this.totalAmount - this.buyservice.buyData[indexfin].price
          console.log('Unchecked',indexfin)
        }

        this.buyArray.splice(indexfin,1)
        this.buyservice.buyData = this.buyArray
        console.log(this.buyservice.buyData)

      }
    }

 onSelected(arg:any){

  this.route.navigate(['/buy'])


 }
}

