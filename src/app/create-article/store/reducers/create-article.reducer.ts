import {createReducer, on} from '@ngrx/store'

import {CreateArticleStateInterface} from '../../models/create-article.state.interface'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/create-article.action'

export const createArticleFeatureKey = 'create-article'

export const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

export const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(createArticleSuccessAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(createArticleFailureAction, (state: CreateArticleStateInterface, {errors}) => ({
    ...state,
    isSubmitting: false,
    validationErrors: errors,
  })),
)
