import {createStubInstance, expect, sinon, StubbedInstanceWithSinonAccessor} from '@loopback/testlab';
import { } from "mocha";
import Sinon from "sinon";
import {RoleController} from '../../controllers';
import {RoleRepository} from '../../repositories';

describe('Role controller', () => {
  let repository: StubbedInstanceWithSinonAccessor<RoleRepository>;
  let controller: RoleController;

  beforeEach(() => {
    repository = createStubInstance(RoleRepository);
    controller = new RoleController(repository);
  });
  it('should get all roles', async () => {
    const findStub = repository.stubs.find as Sinon.SinonStub;
    const arr = [
      {
        "key": "superadmin",
        "name": "superadmin",
        "description": "All access",

      },
      {
        "key": "admin",
        "name": "admin",
        "description": "DB access",

      },
      {
        "key": "subscriber",
        "name": "subscriber",
        "description": "Noaccess",

      }
    ];

    findStub.resolves(arr);
    const details = await controller.find();
    expect(details).to.deepEqual(arr);
    expect(findStub).calledOnce;
  });

  it('should get role by key', async () => {

    const getByKeyStub = repository.stubs.findById as Sinon.SinonStub;
    const role = {
      "key": "admin",
      "name": "Admin",
      "description": "Manages all work.",

    };

    getByKeyStub.resolves(role);
    const details = await controller.findById("admin");
    expect(details).to.deepEqual(role);
    sinon.assert.calledWithMatch(getByKeyStub, "admin");
  })
})

