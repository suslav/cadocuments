import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
} from "@angular/material"
import { MatRadioModule } from '@angular/material/radio'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientregistrationComponent } from './client/clientregistration/clientregistration.component';

import { AngularFireModule, } from 'angularfire2';
import { AngularFireDatabaseModule, } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabase, } from 'angularfire2/database';
import { DocumentService } from './services/document.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { ToastaModule } from 'ngx-toasta';
import { AgGridModule } from 'ag-grid-angular';
import { ViewclientComponent } from './client/viewclient/viewclient.component';



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
    ClientregistrationComponent,
    ViewclientComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    MDBBootstrapModule.forRoot(),
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
    MatInputModule,
    MatRadioModule,
    AppRoutingModule,
    ToastaModule.forRoot(),
    DataTablesModule,
    AgGridModule.withComponents(DashboardComponent)
  ],
  providers: [AuthGuard, DocumentService, AuthService],
  exports: [ToastaModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
