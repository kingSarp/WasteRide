import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { SignUpPageComponent } from './modules/sign-up-page/sign-up-page.component';
import { OtpPageComponent } from './modules/otp-page/otp-page.component';
import { OtpNumberPageComponent } from './modules/otp-number-page/otp-number-page.component';

const routes: Routes = [

  { path: 'sign-up-page', component: SignUpPageComponent },
  { path: '', component: LoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'otp-page', component: OtpPageComponent },
  { path: 'otp-number-page', component: OtpNumberPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
