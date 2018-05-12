import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monthly-statistics',
  templateUrl: './monthly-statistics.component.html',
  styleUrls: ['./monthly-statistics.component.scss']
})
export class MonthlyStatisticsComponent implements OnInit {
  public componentName: string = '月度统计';

  constructor() { }

  ngOnInit() {
  }

}
