import { TestBed, inject } from '@angular/core/testing';

import { HeartService } from './heart.service';

describe('HeartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeartService]
    });
  });

  it('should be created', inject([HeartService], (service: HeartService) => {
    expect(service).toBeTruthy();
  }));
});
