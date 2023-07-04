import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import {
  FormGroup,
  FormBuilder,
  FormControlName,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-otp-number-page',
  templateUrl: './otp-number-page.component.html',
  styleUrls: ['./otp-number-page.component.scss']
})
export class OtpNumberPageComponent {
  // otp!: FormGroup;

  
  number = '';



  constructor(private _formBuilder: FormBuilder) {
   
  }
  otpForm = this._formBuilder.group({
    number:new FormControl('', [ Validators.required]),
  });

save(){

}

}
