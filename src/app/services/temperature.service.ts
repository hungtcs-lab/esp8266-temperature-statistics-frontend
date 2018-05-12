import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TemperatureService {

  constructor(
    private http:HttpClient) {

  }

}
