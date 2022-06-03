import {createStubInstance, expect, sinon, StubbedInstanceWithSinonAccessor} from '@loopback/testlab';
import { } from "mocha";
import {UserController} from '../../controllers';
import {Users} from '../../models';
import {UsersRepository} from '../../repositories';
describe('User Controller', () => {
  let repository: StubbedInstanceWithSinonAccessor<UsersRepository>;
  let controller: UserController;

  beforeEach(() => {
    repository = createStubInstance(UsersRepository);
    controller = new UserController(repository);
  });

  it('should get users properly', async () => {

    const arr = [
      {
        "customerId": 1,
        "id": 1,
        "firstname": "Neil",
        "middlename": "-",
        "lastname": "Irani",
        "email": "neil.irani@gmail.com",
        "phone": "408-10000",
        "roleName": "superadmin",
        "customerName": "Ashish",
        "address": "Australia",

      }
    ];
    const findStub = repository.stubs.find as sinon.SinonStub;

    findStub.resolves(arr);
    const details = await controller.find();

    expect(details).to.deepEqual(arr);
    sinon.assert.calledOnce;
  })
  it('should delete users properly', async () => {

    const deleteStub = repository.stubs.deleteById as sinon.SinonStub;

    await controller.deleteById(1);
    sinon.assert.calledWithMatch(deleteStub, 1);

  });
  it('should update users', async () => {

    const updateStub = repository.stubs.replaceById as sinon.SinonStub;
    const body: Users = {
      "customerid": 1,
      "id": 1,
      "firstname": "Neil",
      "middlename": "-",
      "lastname": "Irani",
      "email": "neil4541.irani@gmail.com",
      "phone": "408-10000",
      "roleName": "admin",
      "customerName": "Ashish",
      "address": "Australia",

      getId: function () {
        throw new Error('Function not implemented.');
      },
      getIdObject: function (): Object {
        throw new Error('Function not implemented.');
      },
      toJSON: function (): Object {
        throw new Error('Function not implemented.');
      },
      toObject: function (options?: Object): Object {
        throw new Error('Function not implemented.');
      }
    }

    const details = await controller.replaceById(34, body);
    sinon.assert.calledWithMatch(updateStub, 34);

  });
});

