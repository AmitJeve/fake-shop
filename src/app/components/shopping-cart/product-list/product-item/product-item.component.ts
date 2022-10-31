import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Data } from 'src/assets/data-interface';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
isLoading= true;
data:Data[]=[]
checkOutData:Data[]=[]
constructor(private dataservice :DataService, private http:HttpClient){}




  ngOnInit() {
    this.dataservice.getData().subscribe((response)=>{
      this.data = response
      console.log(this.data)
      this.isLoading=false
  })
}

    addToCart(info:any){

      this.checkOutData.push(info)
   console.log(info)
  this.dataservice.checkOutData=this.checkOutData

    }
}
