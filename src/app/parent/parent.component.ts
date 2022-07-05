import { Component, DoCheck, Input, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit , DoCheck {

  constructor( private mysvc:DataService) { }

@Input()
  counterInParent = 0;
 flag = true;

 data;

  increment(){
    debugger;
  //  this.counterInParent = 0;
  this.flag = !this.flag;
  }
 
  @ViewChild( ChildComponent, {static:true})
  child: ChildComponent

  handleEvent(event){
  debugger;

  this.counterInParent = event;
  }


  ngOnInit(): void {
  //  debugger;
    //this.counterInParent = this. child.counterInChlid;
    this.data = this.mysvc.getData();

      }

  ngDoCheck(): void {
 // debugger;
  }
}
