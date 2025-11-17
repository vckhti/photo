import {bootstrapApplication, platformBrowser} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {AppModule} from './app/app.module';

// bootstrapApplication.bootstrapModule(App, appConfig)
//   .catch((err) => console.error(err));

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// platformBrowser().bootstrapModule(MyApplicationModule);
