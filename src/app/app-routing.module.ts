import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { ClientregistrationComponent } from './client/clientregistration/clientregistration.component';
import { ViewclientComponent } from './client/viewclient/viewclient.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'clientregistration', component: ClientregistrationComponent, canActivate: [AuthGuard] },
  { path:'viewclient', component:ViewclientComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
