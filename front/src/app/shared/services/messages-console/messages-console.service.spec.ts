import { TestBed } from '@angular/core/testing';

import { MessagesConsoleService } from './messages-console.service';

describe('MessagesConsoleService', () => {
  let service: MessagesConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
