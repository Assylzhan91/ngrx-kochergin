import {createReducer, on} from '@ngrx/store'

import {AuthStateInterface} from '@auth/types/auth-state.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '@auth/store/actions/register.action'

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
  on(registerSuccessAction, registerFailureAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
)
