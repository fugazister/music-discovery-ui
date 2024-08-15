import { TestBed } from '@angular/core/testing';

import { BandcampService } from './bandcamp.service';

describe('BandcampService', () => {
  let service: BandcampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandcampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
