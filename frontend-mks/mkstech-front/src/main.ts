import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../src/app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from '../src/app/app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Import your routes here


bootstrapApplication(AppComponent,  {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(), provideAnimationsAsync(),
    
  ]
})
.catch(err => console.error(err));


// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
