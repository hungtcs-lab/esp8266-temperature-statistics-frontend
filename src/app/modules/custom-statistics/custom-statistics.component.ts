import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-statistics',
  templateUrl: './custom-statistics.component.html',
  styleUrls: ['./custom-statistics.component.scss']
})
export class CustomStatisticsComponent implements OnInit {
  private componentName: string = '区间统计';

  constructor() { }

  ngOnInit() {
  }

}
