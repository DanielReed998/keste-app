import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClient } from '@angular/common/http';

import { GenerateGreetingService } from './generate-greeting.service';
import { Observable } from 'rxjs/Observable';

describe('GenerateGreetingService', () => {
  let service: GenerateGreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        GenerateGreetingService,
        {provide: HttpClient, deps: [MockBackend]},
      ]
    });
  });

  it('should be created', inject([GenerateGreetingService], (service: GenerateGreetingService) => {
    expect(service).toBeTruthy();
  }));

  it ('should return correct greeting for name input', inject([GenerateGreetingService], (service: GenerateGreetingService) => {
    console.log(service.getGreeting('Name'));
  }));
});
