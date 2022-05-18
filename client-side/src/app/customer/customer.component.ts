import { Component, OnInit } from '@angular/core';
import { CustomerhttprequestService } from '../customerhttprequestservice.service';
import { HTTPServiceRequest } from '../httpRequestService';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: any = [];

  constructor(private customerService: CustomerhttprequestService, private httpRequestService: HTTPServiceRequest) { }

  ngOnInit(): void {
    this.getCustomers()
  }
  getCustomers() {

    this.customerService.getCustomerDetails().subscribe(response => {
      this.customers = response
    })
  }
}
