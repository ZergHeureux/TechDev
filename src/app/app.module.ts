import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CalendarViewModule } from "./components/calendar-view/calendar-view.module";
import { environment } from '../environments/environment';
import { QrCodeImplModule } from './components/qr-code/qr-code-impl.module';

import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { SignaturePad } from './components/signature-pad/signature-pad.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { StudentList } from './components/student-list/student-list.component';

import { ButtonModule } from 'primeng/button';
import { LoginPageComponent } from './components/login-page/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignaturePad,
    StudentList
  ],
  imports: [
    CalendarViewModule,
    QrCodeImplModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularSignaturePadModule,
    TableModule,
    DialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
