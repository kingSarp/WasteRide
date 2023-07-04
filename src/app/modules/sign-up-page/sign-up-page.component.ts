import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControlName,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  hide = true;



  signUp: FormGroup;

  name = '';
  email = '';
  password = '';

  constructor(private _formBuilder: FormBuilder) {
    this.signUp = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  save(){
    
  }
}
