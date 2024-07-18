import {createFeatureSelector, createSelector} from '@ngrx/store'

import {ArticleStateInterface} from '../models/article-state.interface'
import {articleFeatureKey} from './reducers/article.reducers'

export const articleFeatureSelector =
  createFeatureSelector<ArticleStateInterface>(articleFeatureKey)

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading,
)

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error,
)

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data,
)
