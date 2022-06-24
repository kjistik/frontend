import { TestBed } from '@angular/core/testing';

import { SpringbootServiceService } from './springboot-service.service';

describe('SpringbootServiceService', () => {
  let service: SpringbootServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringbootServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
