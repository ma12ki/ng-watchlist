import { TestBed, inject } from '@angular/core/testing';

import { DecoratedApolloService } from './decorated-apollo.service';

describe('DecoratedApolloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecoratedApolloService]
    });
  });

  it('should ...', inject([DecoratedApolloService], (service: DecoratedApolloService) => {
    expect(service).toBeTruthy();
  }));
});
