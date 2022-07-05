import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
//  template:'<h1>Hello from App Comp</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {

   myservice: DataService;
    constructor(_mydataservice1: DataService){
      // this.myservice = new DataService('New Name', 'new lastname'); // creatiion of instance is happening
    this.myservice = _mydataservice1;
    
    }

  title = 'my-first-app is working. its Great!';
  
   myname : number = 100;

   mystyle = {'color':'red', 'background-color':'blue'};

   customClass ='myClass2';

   flag = true;

   customers =[
    {"name": "Paul", "age": 26},
    {"name": "Mary", "age": 25},
    {"name": "Ryan ", "age": 45},
    {"name": "Bob", "age": 25},
    {"name": "Smith", "age": 25},
    {"name": "Smith1", "age": 25}
   ]
  

   toggleFlag(){
    debugger;
    this.flag = !this.flag;

    this.myservice.changetitle('Hello');
      this.customClass = "myClass1";
      this.mystyle = {'color':'white', 'background-color':'green'};
   }

}
