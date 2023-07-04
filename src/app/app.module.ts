import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { SignUpPageComponent } from './modules/sign-up-page/sign-up-page.component';
import { OtpPageComponent } from './modules/otp-page/otp-page.component';
import { OtpNumberPageComponent } from './modules/otp-number-page/otp-number-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    OtpPageComponent,
    OtpNumberPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
