import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {provideStore, provideState} from '@ngrx/store'
import {provideRouter} from '@angular/router'
import {provideEffects} from '@ngrx/effects'

import {routes} from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideState('', {}),
    provideStore(),
    provideStoreDevtools({
      logOnly: !isDevMode(),
      maxAge: 25,
    }),
    provideRouter(routes),
  ],
}
