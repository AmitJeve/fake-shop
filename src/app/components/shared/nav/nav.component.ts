
import { DataService } from './../../../data.service';
import { Component,  DoCheck } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements DoCheck {
  checkoutActive:boolean=false
  lengthData: number=0
  constructor(private router:Router, private dataService: DataService) { }

    ngDoCheck() {
    if(this.dataService.checkOutData.length >= 1){
      this.checkoutActive= true
    }else{
        this.checkoutActive = false
      }
      this.lengthData = this.dataService.checkOutData.length
    }


  checkout(){
    this.router.navigate(['/cart'])
  }
}

