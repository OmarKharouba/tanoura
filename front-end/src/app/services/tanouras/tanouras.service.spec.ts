import { TestBed } from '@angular/core/testing';

import { TanourasService } from './tanouras.service';

describe('TanourasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TanourasService = TestBed.get(TanourasService);
    expect(service).toBeTruthy();
  });
});
