import { TestBed, inject } from '@angular/core/testing';

import { PieService } from './pie.service';

describe('PieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PieService]
    });
  });

  it('should be created', inject([PieService], (service: PieService) => {
    expect(service).toBeTruthy();
  }));
});
