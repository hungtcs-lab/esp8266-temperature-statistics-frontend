import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'real-time-monitoring',
  templateUrl: './real-time-monitoring.component.html',
  styleUrls: ['./real-time-monitoring.component.scss']
})
export class RealTimeMonitoringComponent implements OnInit, AfterViewInit {
  public componentName: string = '实时监控';
  @ViewChild('echart')
  private chart: ElementRef;
  private charts:any = {};

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let { nativeElement } = this.chart;
    let chart = echarts.init(nativeElement);
    chart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
    this.charts[0] = chart;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    Object.keys(this.charts).forEach(key => {
      this.charts[key].resize();
    });
  }

}
