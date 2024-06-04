import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {provideRouterStore, routerReducer} from '@ngrx/router-store'
import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {provideState, provideStore} from '@ngrx/store'
import {provideRouter} from '@angular/router'
import {provideEffects} from '@ngrx/effects'

import {GetCurrentUserEffect} from '@auth/store/effects/get-current-user.effect'
import {authInterceptor} from '@shared/services/auth.interceptor'
import {authReducer} from '@auth/store/reducers/auth.reducer'
import {routes} from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects([GetCurrentUserEffect]),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore({}),
    provideState({
      name: 'auth',
      reducer: authReducer,
    }),
    provideStoreDevtools({
      logOnly: !isDevMode(),
      maxAge: 25,
    }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
}
