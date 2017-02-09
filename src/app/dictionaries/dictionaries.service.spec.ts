/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DictionariesService } from './dictionaries.service';

describe('DictionariesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionariesService]
    });
  });

  it('should ...', inject([DictionariesService], (service: DictionariesService) => {
    expect(service).toBeTruthy();
  }));
});
