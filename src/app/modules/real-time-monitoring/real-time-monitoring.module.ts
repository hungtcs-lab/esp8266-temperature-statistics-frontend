import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { RealTimeMonitoringComponent } from './real-time-monitoring.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
  ],
  declarations: [
    RealTimeMonitoringComponent,
  ],
})
export class RealTimeMonitoringModule { }
