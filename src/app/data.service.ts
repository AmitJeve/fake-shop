import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/assets/data-interface';

@Injectable()
export class DataService {
  categories = ['All Categories', 'Table', 'Chair'];
  private _checkOutData:Data[]=[]
  constructor(private http: HttpClient) {
  }

public getData():Observable<Data[]>{
  console.log("This function called")
  return this.http.get<Data[]>('assets/data.json')

}
  set checkOutData(arg){
     this._checkOutData = arg
    // console.log(this._checkOutData)
  }

  get checkOutData(){
    return this._checkOutData
  }
}
