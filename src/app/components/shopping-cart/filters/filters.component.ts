import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  categories = this.dataservice.categories;
  countVariable = this.categories.length;
  categorySelected:string=''


  ngOnInit(): void {
  }

  categoriesProduct(category:any){
    if(this.categories[0]=== category){
      console.log("All")
      this.categorySelected = category
    }
    else if(this.categories[1]=== category){
      console.log("Table display")
      this.categorySelected = category
    }

    else if(this.categories[2]=== category){
      console.log("Chair display")
      this.categorySelected = category
    }
  }

}
