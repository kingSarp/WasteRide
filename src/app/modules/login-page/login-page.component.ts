import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import {
  FormGroup,
  FormBuilder,
  FormControlName,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  hide = true;
  signIn: FormGroup;

  email = '';
  password = '';


  constructor(private _formBuilder: FormBuilder) {
    this.signIn = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  save(){}
}
