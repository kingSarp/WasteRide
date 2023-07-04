import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import {
  FormGroup,
  FormBuilder,
  FormControlName,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss']
})
export class OtpPageComponent {
  otp: FormGroup;

  otpnumber = '';



  constructor(private _formBuilder: FormBuilder) {
    this.otp = this._formBuilder.group({
      otp: ['', Validators.required],
    });
  }

save(){

}
}
