import {createReducer, on} from '@ngrx/store'

import {AuthStateInterface} from '@auth/types/auth-state.interface'
import {registerAction} from '@auth/store/actions/register.action'

export const authFeatureKey = 'auth'

export const initialState: AuthStateInterface = {
  isSubmitting: false,
}

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
)
