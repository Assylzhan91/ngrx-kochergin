import {createSelector, createFeatureSelector} from '@ngrx/store'

import {AuthStateInterface} from '@auth/types/auth-state.interface'

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting,
)

export const authErrorResponseSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.authErrorResponse,
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn,
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser,
)

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => !!authState.isLoggedIn,
)
