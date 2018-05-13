import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'e-chart',
  templateUrl: './e-chart.component.html',
  styleUrls: ['./e-chart.component.scss']
})
export class EChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart')
  private chartContainer: ElementRef;
  private chartInstance: any;
  private _option: any;
  @Input('option')
  set option(option) {
    this._option = option;
    if(this.chartInstance) {
      this.chartInstance.setOption(option);
      this.chartInstance.hideLoading();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let { nativeElement } = this.chartContainer;
    this.chartInstance = echarts.init(nativeElement);
    this.chartInstance.showLoading();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize($event) {
    if(this.chartInstance) {
      this.chartInstance.resize();
    }
  }

}
