import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { LoginPageComponent } from './component/recruter-login-modal/recruter-login-modal.component';
import { EmployeeLoginModalComponent } from './component/employee-login-modal/employee-login-modal.component';
import { EmployeeRegisterModalComponent } from './component/employee-register-modal/employee-register-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    SearchComponent,
    RegisterComponent,
    LoginPageComponent,
    HomeComponent,
    EmployeeLoginModalComponent,
    EmployeeRegisterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
