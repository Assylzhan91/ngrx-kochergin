import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'
import {inject, Injectable} from '@angular/core'
import {Router} from '@angular/router'

import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {PersistenceService} from '@shared/services/persistence.service'
import {CurrentUserInterface} from '@shared/types/user.interface'
import {AuthService} from '@auth/services/auth.service'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '@auth/store/actions/register.action'

@Injectable()
export class RegisterEffect {
  persistenceService = inject(PersistenceService)
  authService = inject(AuthService)
  actions$ = inject(Actions)
  router = inject(Router)

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.setToken<string>('accessToken', currentUser.token)
            return registerSuccessAction({currentUser})
          }),
          catchError((res: HttpErrorResponse) =>
            of(registerFailureAction(res.error as {errors: AuthErrorResponseInterface})),
          ),
        )
      }),
    )
  })

  redirectAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(registerSuccessAction),
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
