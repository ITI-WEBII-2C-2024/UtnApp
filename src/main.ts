//ESTE ES EL MAIN PRINCIPAL
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)  //esto
  .catch((err) => console.error(err));



