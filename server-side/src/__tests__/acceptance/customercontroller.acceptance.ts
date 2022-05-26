import {AnyObject} from '@loopback/repository';
import {createStubInstance, expect, sinon, StubbedInstanceWithSinonAccessor} from '@loopback/testlab';
import { } from 'mocha';
import Sinon from 'sinon';
import {CustomerController} from '../../controllers';
import {Customer} from '../../models';
import {CustomerRepository} from '../../repositories';

describe('customer Controller', () => {
  let repository: StubbedInstanceWithSinonAccessor<CustomerRepository>;
  let controller: CustomerController;
  beforeEach(() => {
    repository = createStubInstance(CustomerRepository);
    controller = new CustomerController(repository);
  });
  it('should retrieve all customers', async () => {
    const customerStub = repository.stubs.find as Sinon.SinonStub;
    const arr = [{

      "customerid": "1",
      "name": "Ashish",
      "website": "Website1",
      "address": "India"
    },
    {

      "customerid": "2",
      "name": "Udayan",
      "website": "Website2",
      "address": "USA"
    }
    ]
    customerStub.resolves(arr);
    const details = await controller.find();
    expect(details).to.deepEqual(arr);
    sinon.assert.match(details, arr);
  })
  it('should retrieve customer details using id', async () => {
    let customerIdStub = repository.stubs.findById as Sinon.SinonStub;

    const arr = [{
      "customerid": "1",
      "name": "Ashish",
      "website": "Website1",
      "address": "India"
    }]
    customerIdStub.resolves(arr);
    const details = await controller.findById(1);
    expect(details).to.deepEqual(arr);
    sinon.assert.calledWithMatch(customerIdStub, 1);
  })
  it('should create a new customer', async () => {
    let createStub = repository.stubs.create as Sinon.SinonStub;
    const newCustomer = {
      "customerid": "3",
      "name": "Uday",
      "website": "Website3",
      "address": "India"
    }
    createStub.resolves(newCustomer);
    //const details = await controller.create(newCustomer);
  })
  it('should delete customer by id', async () => {
    const deleteStub = repository.stubs.delete as Sinon.SinonStub;
    await controller.deleteById(2);
    expect(deleteStub).calledOnce;

  })
  it('update a customer', async () => {
    const updateCustomer = repository.stubs.update as Sinon.SinonStub;
    const Customer: Customer = {
      "customerid": 3,
      "name": "Uday",
      "website": "Website3",
      "address": "India",
      users: [],
      getId: function () {
        throw new Error('Function not implemented.');
      },
      getIdObject: function (): Object {
        throw new Error('Function not implemented.');
      },
      toJSON: function (): Object {
        throw new Error('Function not implemented.');
      },
      toObject: function (options?: AnyObject): Object {
        throw new Error('Function not implemented.');
      }
    }
    updateCustomer.resolves(Customer);
    await controller.replaceById(3, Customer);

    //sinon.assert.calledWithMatch(updateCustomer, 3);
  })

})
