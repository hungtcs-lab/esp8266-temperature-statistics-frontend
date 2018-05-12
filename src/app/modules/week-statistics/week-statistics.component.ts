import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'week-statistics',
  templateUrl: './week-statistics.component.html',
  styleUrls: ['./week-statistics.component.scss']
})
export class WeekStatisticsComponent implements OnInit {
  public componentName: string = '本周统计';

  constructor() { }

  ngOnInit() {
  }

}
