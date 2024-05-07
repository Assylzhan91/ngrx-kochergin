import {createSelector, createFeatureSelector} from '@ngrx/store'

import {AuthStateInterface} from '@auth/types/auth-state.interface'

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting,
)
