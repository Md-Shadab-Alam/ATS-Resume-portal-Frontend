import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    SearchComponent,
    LoginPageComponent,
    RegisterComponent,
    HomeComponent
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
