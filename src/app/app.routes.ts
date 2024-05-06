import {provideState} from '@ngrx/store'
import {Routes} from '@angular/router'

import {RegisterComponent} from '@auth/components/register/register.component'
import {authFeatureKey, authReducer} from '@auth/store/reducers/auth.reducer'
import {AuthComponent} from '@auth/auth.component'

export const routes: Routes = [
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
    ],
    providers: [provideState({name: authFeatureKey, reducer: authReducer})],
  },
]
