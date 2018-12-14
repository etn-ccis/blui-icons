import { TestBed, inject } from '@angular/core/testing';

import { NgProgressIconsService } from './ng-progress-icons.service';

describe('NgProgressIconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgProgressIconsService]
    });
  });

  it('should be created', inject([NgProgressIconsService], (service: NgProgressIconsService) => {
    expect(service).toBeTruthy();
  }));
});
