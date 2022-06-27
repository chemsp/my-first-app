import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCustomModule } from './custom-module/my-custom.module';
import { HomeComponent} from './home/home.component'
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({ 
  declarations:[AppComponent, HomeComponent, CustomerComponent],
  imports:[
     MyCustomModule,
     BrowserModule, 
    ],
    providers:[],
    exports:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
