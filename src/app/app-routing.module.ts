import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginPageComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
