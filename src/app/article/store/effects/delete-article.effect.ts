import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {inject, Injectable} from '@angular/core'

import {ArticleService} from '../../service/article.service'
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
} from '../actions/delete-article.action'
import {Router} from '@angular/router'

@Injectable()
export class DeleteArticleEffect {
  articleService = inject(ArticleService)
  actions$ = inject(Actions)
  router = inject(Router)

  deleteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({slug}) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => deleteArticleSuccessAction()),
          catchError(() => of(deleteArticleFailureAction())),
        )
      }),
    )
  })

  redirectAfterDelete$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        }),
      )
    },
    {
      dispatch: false,
    },
  )
}
