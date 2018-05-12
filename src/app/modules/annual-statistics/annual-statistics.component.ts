import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'annual-statistics',
  templateUrl: './annual-statistics.component.html',
  styleUrls: ['./annual-statistics.component.scss']
})
export class AnnualStatisticsComponent implements OnInit {
  public componentName: string = '年度统计';

  constructor() { }

  ngOnInit() {
  }

}
