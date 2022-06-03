import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Customer, Users} from '../models';
import {UsersRepository} from './users.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.customerid

> {

  public readonly customer: BelongsToAccessor<Users, typeof Customer.prototype.customerid>;

  public readonly users: HasManyRepositoryFactory<Users, typeof Customer.prototype.customerid>;

  constructor(
    @inject('datasources.PG') dataSource: PgDataSource, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>,
  ) {
    super(Customer, dataSource);
    this.users = this.createHasManyRepositoryFactoryFor('users', usersRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
  }
}
