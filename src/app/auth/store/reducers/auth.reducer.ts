import {createReducer, on} from '@ngrx/store'

import {AuthStateInterface} from '@auth/types/auth-state.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '@auth/store/actions/register.action'
import {loginAction, loginFailureAction, loginSuccessAction} from '@auth/store/actions/login.action'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '@auth/store/actions/get-current-user.action'

export const authFeatureKey = 'auth'

export const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  authErrorResponse: null,
  isLoading: false,
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

  on(getCurrentUserAction, (state: AuthStateInterface) => ({
    ...state,
    isLoading: true,
  })),

  on(getCurrentUserSuccessAction, (state: AuthStateInterface, {currentUser}) => ({
    ...state,
    isLoading: false,
    currentUser,
    isLoggedIn: true,
  })),

  on(getCurrentUserFailureAction, (state: AuthStateInterface) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
  })),
)
