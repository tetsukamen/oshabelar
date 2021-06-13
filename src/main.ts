import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { messages } from './messages';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
Amplify.I18n.putVocabularies(messages);
Amplify.I18n.setLanguage('ja');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
