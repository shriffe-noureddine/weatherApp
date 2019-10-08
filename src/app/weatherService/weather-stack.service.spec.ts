import { TestBed } from '@angular/core/testing';

import { WeatherStackService } from './weather-stack.service';

describe('WeatherStackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherStackService = TestBed.get(WeatherStackService);
    expect(service).toBeTruthy();
  });
});
