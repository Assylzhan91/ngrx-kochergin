import {createReducer, on} from '@ngrx/store'

import {AuthStateInterface} from '@auth/types/auth-state.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '@auth/store/actions/register.action'
import {loginAction, loginFailureAction, loginSuccessAction} from '@auth/store/actions/login.action'

export const authFeatureKey = 'auth'

export const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  authErrorResponse: null,
}

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    authErrorResponse: null,
  })),
  on(registerSuccessAction, (state: AuthStateInterface, {currentUser}) => ({
    ...state,
    isLoggedIn: true,
    currentUser,
    isSubmitting: false,
  })),
  on(registerFailureAction, (state: AuthStateInterface, {errors}) => ({
    ...state,
    authErrorResponse: errors,
    isSubmitting: false,
  })),

  on(loginAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    authErrorResponse: null,
  })),
  on(loginSuccessAction, (state: AuthStateInterface, {currentUser}) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser,
  })),
  on(loginFailureAction, (state: AuthStateInterface, {errors}) => ({
    ...state,
    isSubmitting: false,
    authErrorResponse: errors,
  })),
)
