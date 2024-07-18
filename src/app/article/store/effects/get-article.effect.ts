import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {inject, Injectable} from '@angular/core'

import {ArticleService as SharedArticleService} from '@shared/services/article.service'
import {ArticleInterface} from '@shared/interfaces/article.interface'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/get-article.action'
import {HttpErrorResponse} from '@angular/common/http'

@Injectable()
export class GetArticleEffect {
  sharedArticleService = inject(SharedArticleService)
  actions$ = inject(Actions)

  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.sharedArticleService.getArticleList(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article})
          }),
          catchError((err: HttpErrorResponse) => {
            return of(getArticleFailureAction({error: err.message}))
          }),
        )
      }),
    )
  })
}
