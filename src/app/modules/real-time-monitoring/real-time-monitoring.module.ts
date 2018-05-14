import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { RealTimeMonitoringComponent } from './real-time-monitoring.component';
import { CillboardComponent } from './cillboard/cillboard.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
  ],
  declarations: [
    RealTimeMonitoringComponent,
    CillboardComponent,
  ],
})
export class RealTimeMonitoringModule { }
