import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {provideState, provideStore} from '@ngrx/store'
import {provideHttpClient} from '@angular/common/http'
import {provideRouter} from '@angular/router'
import {provideEffects} from '@ngrx/effects'

import {GetCurrentUserEffect} from '@auth/store/effects/get-current-user.effect'
import {authReducer} from '@auth/store/reducers/auth.reducer'
import {routes} from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects([GetCurrentUserEffect]),
    provideStore(),
    provideState({
      name: 'auth',
      reducer: authReducer,
    }),
    provideStoreDevtools({
      logOnly: !isDevMode(),
      maxAge: 25,
    }),
    provideRouter(routes),
    provideHttpClient(),
  ],
}
