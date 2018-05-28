import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TemperatureService } from '../../services/temperature.service';
import * as moment from 'moment';

@Component({
  selector: 'week-statistics',
  templateUrl: './week-statistics.component.html',
  styleUrls: ['./week-statistics.component.scss']
})
export class WeekStatisticsComponent implements OnInit, AfterViewInit {
  public componentName: string = '本周统计';
  option: any;

  constructor(private temperatureService: TemperatureService) {

  }

  ngOnInit() {
    this.getWeekAverageChartData();
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.getWeekAverageChartData();
    }, 60000);
  }

  private getWeekAverageChartData() {
    this.temperatureService.getThisWeekAverage()
    .then(({ status, data }) => {
      if(status === 0) {
        this.option = {
          title: {
            text: '本周平均温度',
          },
          grid: {
            containLabel: true,
            left: '5%',
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{b}<br />{a}: {c}℃<br />'
          },
          legend: {
            data:['平均室内温度'],
            bottom: 3,
          },
          xAxis: {
            name: '时间',
            data: data.map(item => ['--', '周日', '周一', '周二', '周三', '周四', '周五', '周六'][item.dayofweek])
          },
          yAxis: {
            name: '摄氏度 ℃',
            min: value => Math.round(value.min - 1),
            max: value => Math.round(value.max + 1),
          },
          series: [{
            name: '平均室内温度',
            type: 'line',
            smooth: true,
            data: data.map(item => item.value.toFixed(2)),
          }],
          // dataZoom: [
          //   {
          //     type: 'inside',
          //     filterMode: 'none'
          //   },
          // ],
        };
      } else {
        throw new Error(`bad status code ${ status }`);
      }
    }).catch(err => {
      console.error(err);
       (<any>window).M.toast({
         html: '获取数据失败！',
         displayLength: 5000,
         classes: 'red',
       });
    });
  }

}
