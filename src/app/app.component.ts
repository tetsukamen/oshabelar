import { Component, OnInit } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { ResponsibleService } from './shared/services/responsible.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  signUpFormFields: FormFieldTypes;

  constructor(
    private responsibleService: ResponsibleService,
  ) { }

  ngOnInit() {
    this.signUpFormFields = [
      { type: "username" },
      { type: "email" },
      { type: "password" },
    ];
    this.responsibleService.setSize();
  }

}
