import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCustomModule } from './custom-module/my-custom.module';
import { HomeComponent} from './home/home.component'
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DataService } from 'src/app/services/data.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({ 
  declarations:[AppComponent, HomeComponent, CustomerComponent, HighlightDirective, ParentComponent, ChildComponent],
  imports:[
     MyCustomModule,
     BrowserModule, 
     FormsModule,
     HttpClientModule
    ],
    providers:[],
    exports:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
