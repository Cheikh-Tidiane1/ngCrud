import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { DataService } from './data.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), DataService],
};
