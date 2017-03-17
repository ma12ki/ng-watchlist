/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AvailableEpisodesService } from './available-episodes.service';

describe('AvailableEpisodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailableEpisodesService]
    });
  });

  it('should ...', inject([AvailableEpisodesService], (service: AvailableEpisodesService) => {
    expect(service).toBeTruthy();
  }));
});
