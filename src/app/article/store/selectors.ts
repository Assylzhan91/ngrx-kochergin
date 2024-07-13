import {createFeatureSelector, createSelector} from '@ngrx/store'

import {ArticleStateInterface} from '../models/article-state.interface'
import {articleFeatureKey} from './reducers/article.reducers'

export const feedFeatureSelector = createFeatureSelector<ArticleStateInterface>(articleFeatureKey)

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading,
)

export const errorSelector = createSelector(
  feedFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error,
)

export const feedSelector = createSelector(
  feedFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data,
)
