import { Component, OnInit } from '@angular/core';

/* Angular Forms */
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  username: AbstractControl;
  password: AbstractControl;

  constructor( private _form_builder : FormBuilder, private _router: Router ) {

    this.loginForm = this._form_builder.group({
      username : [ '', [ Validators.required ] ],
      password : [ '', [ Validators.required ] ]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];

  }

  ngOnInit() { }

  onSubmitForm( form : any ){
    let todo = this;
    this._router.navigate(['dashboard'], { skipLocationChange: false } )
  }

}
