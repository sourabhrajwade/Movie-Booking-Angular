import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
