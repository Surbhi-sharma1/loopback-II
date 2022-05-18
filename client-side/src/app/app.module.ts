import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { HTTPServiceRequest } from './httpRequestService';
import { EdituserComponent } from './edituser/edituser.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerRowComponent } from './customer/customer-row/customer-row.component';
import { NewcustomerComponent } from './customer/newcustomer/newcustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddComponent,
    EdituserComponent,
    CustomerComponent,
    CustomerRowComponent,
    NewcustomerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [HTTPServiceRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
