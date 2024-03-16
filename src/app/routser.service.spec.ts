import { TestBed } from '@angular/core/testing';

import { RoutserService } from './routser.service';

describe('RoutserService', () => {
  let service: RoutserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
