import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../src/app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from '../src/app/app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { NativeDateAdapter } from '@angular/material/core';

// Defina o formato de data padrão
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    monthYearCalendarLabel: 'MMMM YYYY',
    yearLabel: 'YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
    { provide: DateAdapter, useClass: NativeDateAdapter }, // Provide the DateAdapter
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, // Set date locale
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }, // Provide the date formats
  ]
})
.catch(err => console.error(err));

