/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllShowsService } from './all-shows.service';

describe('AllShowsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllShowsService]
    });
  });

  it('should ...', inject([AllShowsService], (service: AllShowsService) => {
    expect(service).toBeTruthy();
  }));
});
