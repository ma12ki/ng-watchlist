/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewShowService } from './new-show.service';

describe('NewShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewShowService]
    });
  });

  it('should ...', inject([NewShowService], (service: NewShowService) => {
    expect(service).toBeTruthy();
  }));
});
