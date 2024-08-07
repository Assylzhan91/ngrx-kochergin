import {routerNavigatedAction} from '@ngrx/router-store'
import {createReducer, on} from '@ngrx/store'

import {ArticleStateInterface} from '../../models/article-state.interface'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/get-article.action'

export const articleFeatureKey = 'article'

export const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

export const articledReducer = createReducer(
  initialState,
  on(getArticleAction, (state: ArticleStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state: ArticleStateInterface, {article}) => ({
    ...state,
    isLoading: false,
    data: article,
  })),
  on(getArticleFailureAction, (state: ArticleStateInterface, {error}) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(routerNavigatedAction, (state: ArticleStateInterface) => initialState),
)
