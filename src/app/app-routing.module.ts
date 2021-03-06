import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './login/auth/auth.component';
import { RegisterComponent } from './login/register/register.component';
import { DashboardComponent } from './principal/dashboard/dashboard.component';
import { LoginGuard } from './login.guard'

const routes: Routes = [
  
  {
    path: 'signin',
    component: AuthComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
