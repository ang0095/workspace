import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { OfficeStaffComponent } from './office-staff/office-staff.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { StudashComponent } from './studash/studash.component';
import { OffdashComponent } from './offdash/offdash.component';

@NgModule({
  declarations: [
    AppComponent, 
    ScheduleDetailsComponent,
    NavbarComponent,
    AdminComponent,
    StudentComponent,
    OfficeStaffComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    StudashComponent,
    OffdashComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
