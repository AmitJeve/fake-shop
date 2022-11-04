
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
// console.log(this.i)
      if(this.isValueChecked){
        this.buyActive=true;
        this.buyArray.push(arg)
        // console.log(this.buyArray)

        for(;this.i<this.buyArray.length;this.i++){
          this.totalAmount= this.totalAmount + this.buyArray[this.i].price
        }
        // console.log(this.i)
        this.buyservice.buyData= this.buyArray
      }

      if(!this.isValueChecked){
        this.i=0
        const id= arg.id
        const indexFin  = this.buyArray.findIndex((e:any)=>{
          if(e.id === id){
            return id;
          }
        })
        if(indexFin != -1){
          console.log(this.totalAmount)
          console.log(this.buyservice.buyData[indexFin].price)
          this.totalAmount = this.totalAmount - this.buyservice.buyData[indexFin].price
          console.log('Unchecked',indexFin)
          console.log(this.totalAmount)
            if(this.totalAmount<0){
              this.totalAmount=0;
            }


        }

        this.buyArray.splice(indexFin,1)
        this.buyservice.buyData = this.buyArray
        console.log(this.buyservice.buyData)


      }
    }

 onSelected(arg:any){

  this.route.navigate(['/buy'])


 }
}

