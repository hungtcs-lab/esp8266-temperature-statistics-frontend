import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { RealTimeMonitoringModule } from './modules/real-time-monitoring/real-time-monitoring.module';
import { WeekStatisticsModule } from './modules/week-statistics/week-statistics.module';
import { MonthlyStatisticsModule } from './modules/monthly-statistics/monthly-statistics.module';
import { AnnualStatisticsModule } from './modules/annual-statistics/annual-statistics.module';
import { CustomStatisticsModule } from './modules/custom-statistics/custom-statistics.module';

import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { SlideNavigationComponent } from './components/slide-navigation/slide-navigation.component';

import { TemperatureService } from './services/temperature.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    SlideNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RealTimeMonitoringModule,
    WeekStatisticsModule,
    MonthlyStatisticsModule,
    AnnualStatisticsModule,
    CustomStatisticsModule,
  ],
  providers: [
    HttpClientModule,
    TemperatureService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
