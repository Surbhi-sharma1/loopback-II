import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Memory',
  connector: 'memory',
  localStorage: '',
  file: 'data.json'
};

@lifeCycleObserver('datasource')
export class MemoryDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Memory';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Memory', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
