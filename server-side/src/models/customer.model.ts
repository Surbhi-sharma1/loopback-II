import {Entity, model, property, hasMany} from '@loopback/repository';
import {Users} from './users.model';

@model({
  name: 'customer'
})
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true
  })
  customerid?: number;

  @property({
    type: 'string',
    required: true,

  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  website: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @hasMany(() => Users, {keyTo: 'customerid'})
  users: Users[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}


