import { TestBed } from '@angular/core/testing';

import { CustomerhttprequestserviceService } from './customerhttprequestservice.service';

describe('CustomerhttprequestserviceService', () => {
  let service: CustomerhttprequestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerhttprequestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
