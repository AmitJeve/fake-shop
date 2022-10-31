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
  buyArray:Data[]=[]

  constructor(private dataservice:DataService,private route : Router) {
  }

  ngOnInit(){
       this.checkOutData = this.dataservice.checkOutData
      for(let i=0;i<this.checkOutData.length;i++){
        this.totalAmount = this.totalAmount + this.checkOutData[i].price
      }
  }
 onSelected(arg:any){
  // console.log(arg)
  console.log(this.checkOutData)
  this.route.navigate(['/buy'])

  this.buyArray.push(arg)
  console.log(this.buyArray)
 }
onSelect(){
  console.log(this.checkOutData)
}

}
