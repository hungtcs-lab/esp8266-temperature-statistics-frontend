import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Temperature } from '../entities/temperature';

@Injectable()
export class TemperatureService {

  constructor(
    private http:HttpClient) {

  }

  getList() {
    return this.http.get<any>(`http://temperature.hungtcs.top/api/list`, {}).toPromise<{ status: number, data: { count: number, list: Array<Temperature> } }>();
  }

}
