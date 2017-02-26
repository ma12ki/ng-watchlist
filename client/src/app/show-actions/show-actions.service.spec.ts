/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShowActionsService } from './show-actions.service';

describe('ShowActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowActionsService]
    });
  });

  it('should ...', inject([ShowActionsService], (service: ShowActionsService) => {
    expect(service).toBeTruthy();
  }));
});
