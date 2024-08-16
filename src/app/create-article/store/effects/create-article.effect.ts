import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'
import {inject, Injectable} from '@angular/core'
import {Router} from '@angular/router'

import {CreateArticleService} from '../../services/create-article.service'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/create-article.action'

@Injectable()
export class CreateArticleEffect {
  createArticleService = inject(CreateArticleService)
  actions$ = inject(Actions)
  router = inject(Router)

  createArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({articleInput}) => this.createArticleService.createArticle(articleInput)),
      map((article) => createArticleSuccessAction({article})),
      catchError((res: HttpErrorResponse) => of(createArticleFailureAction(res.error))),
    )
  })

  redirectAfterCreate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => this.router.navigate(['/articles', article.slug])),
      )
    },
    {
      dispatch: false,
    },
  )
}
