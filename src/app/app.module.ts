import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { CommonComponentsModule } from './modules/common-components/common-components.module';
import { RealTimeMonitoringModule } from './modules/real-time-monitoring/real-time-monitoring.module';
import { WeekStatisticsModule } from './modules/week-statistics/week-statistics.module';
import { MonthlyStatisticsModule } from './modules/monthly-statistics/monthly-statistics.module';
import { AnnualStatisticsModule } from './modules/annual-statistics/annual-statistics.module';
import { CustomStatisticsModule } from './modules/custom-statistics/custom-statistics.module';

import { AppComponent } from './app.component';

import { TemperatureService } from './services/temperature.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonComponentsModule,
    RealTimeMonitoringModule,
    WeekStatisticsModule,
    MonthlyStatisticsModule,
    AnnualStatisticsModule,
    CustomStatisticsModule,
  ],
  providers: [
    TemperatureService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
