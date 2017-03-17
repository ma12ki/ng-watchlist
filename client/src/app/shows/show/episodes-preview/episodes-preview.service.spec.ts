/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EpisodesPreviewService } from './episodes-preview.service';

describe('EpisodesPreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpisodesPreviewService]
    });
  });

  it('should ...', inject([EpisodesPreviewService], (service: EpisodesPreviewService) => {
    expect(service).toBeTruthy();
  }));
});
