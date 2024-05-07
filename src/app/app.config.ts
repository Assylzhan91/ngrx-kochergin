import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {provideHttpClient} from '@angular/common/http'
import {provideRouter} from '@angular/router'
import {provideEffects} from '@ngrx/effects'
import {provideStore} from '@ngrx/store'

import {routes} from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore(),
    provideStoreDevtools({
      logOnly: !isDevMode(),
      maxAge: 25,
    }),
    provideRouter(routes),
    provideHttpClient(),
  ],
}
