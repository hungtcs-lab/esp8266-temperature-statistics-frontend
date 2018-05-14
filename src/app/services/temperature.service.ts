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

}
