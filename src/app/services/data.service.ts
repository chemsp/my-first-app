import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class DataService {

  constructor(private http: HttpClient){}
  title= ''
  changetitle(val){
    this.title = val;
  }
  

  getData(){
  return  this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}