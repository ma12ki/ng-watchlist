/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpcomingEpisodesService } from './upcoming-episodes.service';

describe('UpcomingEpisodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingEpisodesService]
    });
  });

  it('should ...', inject([UpcomingEpisodesService], (service: UpcomingEpisodesService) => {
    expect(service).toBeTruthy();
  }));
});
