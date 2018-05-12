import { Component, OnInit, Input, ComponentRef } from '@angular/core';
import { SlideNavigationComponent } from './components/slide-navigation/slide-navigation.component'
import 'materialize-css';

const menus = [
  {
    icon: 'insert_chart',
    name: '实时统计',
    link: '/real-time-monitoring',
  },
  {
    icon: 'today',
    name: '本周统计',
    link: '/week-statistics',
  },
  {
    icon: 'multiline_chart',
    name: '月度统计',
    link: '/monthly-statistics',
  },
  {
    icon: 'pie_chart',
    name: '年度统计',
    link: '/annual-statistics',
  },
  {
    type: 'divider',
  },
  {
    icon: 'trending_up',
    name: '时间区间统计',
    link: '/custom-statistics',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private headerTitle: string;
  @Input('slideNavigation')
  private slideNavigation: SlideNavigationComponent;
  private menus = menus;

  ngOnInit() {

  }

  onRouterOutletActivate(component) {
    this.headerTitle = component.componentName;
  }

}
