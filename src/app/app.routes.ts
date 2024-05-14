import {provideEffects} from '@ngrx/effects'
import {provideState} from '@ngrx/store'
import {Routes} from '@angular/router'

import {RegisterComponent} from '@auth/components/register/register.component'
import {authFeatureKey, authReducer} from '@auth/store/reducers/auth.reducer'
import {LoginComponent} from '@auth/components/login/login.component'
import {RegisterEffect} from '@auth/store/effects/register.effect'
import {LoginEffect} from '@auth/store/effects/login.effect'
import {HomeComponent} from './home/home.component'
import {AuthComponent} from '@auth/auth.component'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
    providers: [
      provideState({name: authFeatureKey, reducer: authReducer}),
      provideEffects([RegisterEffect, LoginEffect]),
    ],
  },
]
