import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GenerateGreetingService {

  constructor(private http:HttpClient) { }

  getGreeting(name) {
    return this.http.post('/api/name', { name });
  }

}
