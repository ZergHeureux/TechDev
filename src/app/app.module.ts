import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarCommonModule} from "angular-calendar";
import {DemoModule} from "./components/calendar/demo.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DemoModule,
    BrowserModule,
    AppRoutingModule,
    CalendarCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
