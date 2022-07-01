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

import { StudentList } from './components/student-list/student-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HeaderComponent } from './shared/header/header.component';

import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardPage } from './pages/dashboard/dashboard.component';
import { CalendarPage } from './pages/calendar/calendar.component';
import { TeacherClassView } from './pages/teacher-class-view/teacher-class-view.component';
import { StudentView } from './pages/student-view/student-view.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SignaturePad,
    StudentList,
    TeacherClassView,
    SidenavComponent,
    HeaderComponent,
    DashboardPage,
    CalendarPage,
    StudentView,
    LoginPageComponent
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
    ToastModule,
    AppRoutingModule,
    SidebarModule,
    MenubarModule,
    ButtonModule,
    NoopAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
