import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealTimeMonitoringComponent } from './modules/real-time-monitoring/real-time-monitoring.component';
import { WeekStatisticsComponent } from './modules/week-statistics/week-statistics.component';
import { MonthlyStatisticsComponent } from './modules/monthly-statistics/monthly-statistics.component';
import { AnnualStatisticsComponent } from './modules/annual-statistics/annual-statistics.component';
import { CustomStatisticsComponent } from './modules/custom-statistics/custom-statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/real-time-monitoring', pathMatch: 'full' },
  { path: 'real-time-monitoring', component: RealTimeMonitoringComponent },
  { path: 'week-statistics', component: WeekStatisticsComponent },
  { path: 'monthly-statistics', component: MonthlyStatisticsComponent },
  { path: 'annual-statistics', component: AnnualStatisticsComponent },
  { path: 'custom-statistics', component: CustomStatisticsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
