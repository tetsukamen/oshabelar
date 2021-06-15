import { Component, OnInit } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  signUpFormFields: FormFieldTypes;

  constructor() { }

  ngOnInit() {
    this.signUpFormFields = [
      { type: "username" },
      { type: "email" },
      { type: "password" },
    ];
  }

}
