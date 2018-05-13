import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { SlideNavigationComponent } from './slide-navigation/slide-navigation.component';
import { EChartComponent } from './e-chart/e-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderNavigationComponent,
    SlideNavigationComponent,
    EChartComponent,
  ],
  declarations: [
    HeaderNavigationComponent,
    SlideNavigationComponent,
    EChartComponent,
  ]
})
export class CommonComponentsModule { }
