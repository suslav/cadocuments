import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFireModule, } from 'angularfire2';
import { AngularFireDatabaseModule ,} from 'angularfire2/database';
import{AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabase, } from 'angularfire2/database';
import { DocumentService } from './services/document.service';
import { AuthService } from './services/auth.service';
import{AuthGuard} from 'src/app/auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
var fireAppconfig = {
  apiKey: "AIzaSyDqnNcj9H45NVXd3Rw4pGXRQYfe2czCxaU",
  authDomain: "document-34e6c.firebaseapp.com",
  databaseURL: "https://document-34e6c.firebaseio.com",
  projectId: "document-34e6c",
  storageBucket: "document-34e6c.appspot.com",
  messagingSenderId: "541646341268"
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    FlexLayoutModule,
    AngularFireModule.initializeApp(fireAppconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,DocumentService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
