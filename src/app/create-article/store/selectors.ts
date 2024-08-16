import {createFeatureSelector, createSelector} from '@ngrx/store'

import {CreateArticleStateInterface} from '../models/create-article.state.interface'
import {createArticleFeatureKey} from './reducers/create-article.reducer'

export const authFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>(createArticleFeatureKey)

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors,
)
