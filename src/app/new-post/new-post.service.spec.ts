import { TestBed, inject } from '@angular/core/testing';

import { NewPostService } from './new-post.service';

describe('NewPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPostService]
    });
  });

  it('should be created', inject([NewPostService], (service: NewPostService) => {
    expect(service).toBeTruthy();
  }));
});
