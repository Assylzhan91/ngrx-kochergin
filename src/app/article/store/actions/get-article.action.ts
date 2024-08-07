import {createAction, props} from '@ngrx/store'

import {ArticleInterface} from '@shared/interfaces/article.interface'
import {ActionType} from '../action.types'

export const getArticleAction = createAction(ActionType.GET_ARTICLE, props<{slug: string}>())

export const getArticleSuccessAction = createAction(
  ActionType.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>(),
)

export const getArticleFailureAction = createAction(
  ActionType.GET_ARTICLE_FAILURE,
  props<{error: string}>(),
)
