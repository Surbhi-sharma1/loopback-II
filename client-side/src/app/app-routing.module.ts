import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { CustomerComponent } from './customer/customer.component';
import { NewcustomerComponent } from './customer/newcustomer/newcustomer.component';
import { EdituserComponent } from './edituser/edituser.component';

import { TableComponent } from './table/table.component';

const appRoutes: Routes = [

  { path: 'showUsers', component: TableComponent },
  { path: 'addUser', component: AddComponent },
  { path: 'editUser/:id', component: EdituserComponent },
  { path: 'showCustomers', component: CustomerComponent },
  { path: 'showUsers/:id', component: TableComponent },
  { path: 'addCustomer', component: NewcustomerComponent },
  { path: 'addCustomer/:id', component: NewcustomerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
