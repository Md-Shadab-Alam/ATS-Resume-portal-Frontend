import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './component/recruter-login-modal/recruter-login-modal.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { LoginDashboardComponent } from './component/employee-dashboard/login-dashboard/login-dashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginPageComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"emp-dashboard",component: LoginDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
