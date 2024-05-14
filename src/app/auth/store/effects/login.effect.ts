import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'
import {inject, Injectable} from '@angular/core'
import {Router} from '@angular/router'

import {loginAction, loginFailureAction, loginSuccessAction} from '@auth/store/actions/login.action'
import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {PersistenceService} from '@shared/services/persistence.service'
import {CurrentUserInterface} from '@shared/types/user.interface'
import {AuthService} from '@auth/services/auth.service'

@Injectable()
export class LoginEffect {
  persistenceService = inject(PersistenceService)
  authService = inject(AuthService)
  actions$ = inject(Actions)
  router = inject(Router)

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.setToken<string>('accessToken', currentUser.token)
            return loginSuccessAction({currentUser})
          }),
          catchError((res: HttpErrorResponse) =>
            of(loginFailureAction(res.error as {errors: AuthErrorResponseInterface})),
          ),
        )
      }),
    )
  })

  loginAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigate(['/home'])
        }),
      )
    },
    {
      dispatch: false,
    },
  )
}
