/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DictionaryService } from './dictionary.service';

describe('DictionaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryService]
    });
  });

  it('should ...', inject([DictionaryService], (service: DictionaryService) => {
    expect(service).toBeTruthy();
  }));
});
