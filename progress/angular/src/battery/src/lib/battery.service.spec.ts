import { TestBed, inject } from '@angular/core/testing';

import { BatteryService } from './battery.service';

describe('BatteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatteryService]
    });
  });

  it('should be created', inject([BatteryService], (service: BatteryService) => {
    expect(service).toBeTruthy();
  }));
});
