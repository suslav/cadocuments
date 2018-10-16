import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
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
