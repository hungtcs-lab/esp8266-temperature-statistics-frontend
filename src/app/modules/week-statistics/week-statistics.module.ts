import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { WeekStatisticsComponent } from './week-statistics.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
  ],
  declarations: [
    WeekStatisticsComponent,
  ]
})
export class WeekStatisticsModule { }
