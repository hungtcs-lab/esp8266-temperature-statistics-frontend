import * as moment from 'moment';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { TemperatureService } from '../../services/temperature.service';

@Component({
  selector: 'real-time-monitoring',
  templateUrl: './real-time-monitoring.component.html',
  styleUrls: ['./real-time-monitoring.component.scss'],
})
export class RealTimeMonitoringComponent implements OnInit, AfterViewInit {
  public componentName: string = '实时监控';
  option: any;

  constructor(private temperatureService: TemperatureService) {

  }

  ngOnInit() {
    this.getRealTimeChartData();
  }

  ngAfterViewInit() {
    // setInterval(() => {
    //   this.getRealTimeChartData();
    // }, 1000);
  }

  private getRealTimeChartData() {
    this.temperatureService.getList().then(({ status, data }) => {
      if(status === 0) {
        this.option = {
          title: {
            text: '今日温度实时监控',
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{b}<br />{a}: {c}℃<br />'
          },
          legend: {
            data:['室内温度']
          },
          xAxis: {
            data: data.list.map(item => moment(item.datetime).format('HH:mm'))
          },
          yAxis: {
            min: value => Math.round(value.min - 1),
            max: value => Math.round(value.max + 1),
          },
          series: [{
            name: '室内温度',
            type: 'line',
            smooth: true,
            data: data.list.map(item => item.value),
          }]
        };
      } else {
        throw new Error(`bad status code ${ status }`);
      }
    }).catch(err => {
      console.error(err);
    })
  }

}
