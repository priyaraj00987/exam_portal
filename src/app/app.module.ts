import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatButtonModule} from '@angular/material/button';
 import { NavbarComponent } from './component/navbar/navbar.component';
 import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Route, RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";
import{HttpClientModule}from "@angular/common/http";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

const ROUTES: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
