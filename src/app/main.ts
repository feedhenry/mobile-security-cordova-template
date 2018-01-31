import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { KeycloakService } from '../services/auth.service';

// tag::appInit[]
// Ensure that Keycloak is Initialised before Angular to prevent Redirect looping issues
KeycloakService.init()
.then(() => {
  const platform = platformBrowserDynamic();
  // Mamually intiliase angular
  platform.bootstrapModule(AppModule);
})
.catch((err) => console.error("Error Initalizing Keycloak", err));
// end::appInit[]
