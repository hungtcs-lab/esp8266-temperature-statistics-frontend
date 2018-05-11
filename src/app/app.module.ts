import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IndexPageModule } from './pages/index-page/index-page.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SlideNavigationComponent } from './components/slide-navigation/slide-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SlideNavigationComponent,
  ],
  imports: [
    BrowserModule,
    IndexPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
