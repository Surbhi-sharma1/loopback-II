import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { HTTPServiceRequest } from '../httpRequestService';
import Role from '../enum';
import { Router } from '@angular/router';
import { User } from '../userModel';
import { CustomerhttprequestService } from '../customerhttprequestservice.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  users: any = [];
  customerDataById: any = [];
  id!: number;
  customerList: any = [];
  roleList: { name: string; key: string }[] = [];
  constructor(private customerService: CustomerhttprequestService, private fb: FormBuilder, private httpRequestService: HTTPServiceRequest, private router: Router) {
  }

  ngOnInit(): void {
    this.httpRequestService.getUsers().subscribe(response => {
      this.users = response;
    })
    this.getRole();
    this.getCustomer();
  }
  userForm = this.fb.group({
    customerid: [],
    id: [],
    firstname: ['', [Validators.required, Validators.minLength(3)]],
    middlename: [''],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
    roleName: ['', [Validators.required]],
    address: ['', [Validators.required]],

  })
  getRole() {
    this.httpRequestService.getRoleList().subscribe(Response => {
      this.roleList = Response;
    })
  }
  getCustomer() {
    this.customerService.getCustomerList().subscribe(Response => {
      this.customerList = Response;
    })
  }
  onSubmit() {

    const form = this.userForm.value;
    this.httpRequestService.getCustomerById(form.customerid).subscribe(response => {
      this.customerDataById = Object.values(response);

      const customerID = Number(form.customerid);
      const id = Number(form.id);
      let myBody = {
        "customerid": customerID,
        "id": id,
        "firstname": form.firstname,
        "middlename": form.middlename,
        "lastname": form.lastname,
        "email": form.email,
        "phone": form.phone,
        "roleName": form.roleName,
        "customerName": this.customerDataById[1],
        "address": form.address
      }
      console.log(JSON.stringify(myBody))

      this.httpRequestService.createUser(myBody).subscribe((response) => {
        this.router.navigate(['/']);
      }
      )
    })
  }

}
