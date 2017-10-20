import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SampleModule } from 'angular4-highcharts';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleModule.forRoot(),
    ChartModule // add ChartModule to your imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
