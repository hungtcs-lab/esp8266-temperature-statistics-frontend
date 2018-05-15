import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Temperature } from '../entities/temperature';
import config from '../../config';

@Injectable()
export class TemperatureService {

  constructor(
    private http:HttpClient) {

  }

  getList() {
    return this.http.get<any>(`${ config.server.url }/api/list`, {}).toPromise<{
      status: number,
      data: {
        count: number,
        list: Array<Temperature>
      }
    }>();
  }

  getLatest() {
    return this.http.get<any>(`${ config.server.url }/api/latest`, {}).toPromise<{
      status: number,
      data: Temperature,
    }>();
  }

  getMin() {
    return this.http.get<any>(`${ config.server.url }/api/min`, {}).toPromise<{
      status: number,
      data: {
        value: number,
      },
    }>();
  }

  getMax() {
    return this.http.get<any>(`${ config.server.url }/api/max`, {}).toPromise<{
      status: number,
      data: {
        value: number,
      },
    }>();
  }

  getAverage() {
    return this.http.get<any>(`${ config.server.url }/api/average`, {}).toPromise<{
      status: number,
      data: {
        value: number,
      },
    }>();
  }

}
