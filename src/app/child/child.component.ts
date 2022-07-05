import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[DataService]
})
export class ChildComponent implements OnChanges , OnInit, DoCheck, AfterContentInit, OnDestroy{

  constructor( private myservice2: DataService) { }

  // @Output()
  // counterChanged:EventEmitter<number> = new EventEmitter<number>();

@Input() // bound property
counterInChlid = 0;

@Input()
title = 45;
mess;
  customer;
  

ngOnChanges(changes: SimpleChanges): void{
 debugger
 //
}



ngOnInit(): void{
debugger
  this.title = 10000;

  this.mess = "Hello Class" !
this.customer ='' // call to webapi to get customer Data

}

ngDoCheck(): void{

  let x = this.myservice2.title;

  debugger;
}

ngAfterContentInit(){
  debugger;
}

ngOnDestroy(){
  debugger;
  // some clean up
}

increment(){
  debugger;
this.counterInChlid++;
//this.counterChanged.emit(this.counterInChlid);
}

decrement(){
  
 this.counterInChlid--;
 
//this.counterChanged.emit(this.counterInChlid);
}

}
