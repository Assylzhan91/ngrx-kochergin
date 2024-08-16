import {createAction, props} from '@ngrx/store'

import {ArticleEditInputInterface, ArticleInterface} from '@shared/interfaces/article.interface'
import {BackendErrorsResponseInterface} from '@shared/interfaces/auth-error-response.interface'
import {ActionType} from '../action.types'

export const createArticleAction = createAction(
  ActionType.CREATE_ARTICLE,
  props<{
    articleInput: ArticleEditInputInterface<string>
  }>(),
)
export const createArticleSuccessAction = createAction(
  ActionType.CREATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>(),
)
export const createArticleFailureAction = createAction(
  ActionType.CREATE_ARTICLE_FAILURE,
  props<{
    errors: BackendErrorsResponseInterface
  }>(),
)
