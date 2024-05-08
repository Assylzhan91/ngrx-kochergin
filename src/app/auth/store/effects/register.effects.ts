import {Actions, createEffect, ofType} from '@ngrx/effects'
import {HttpErrorResponse} from '@angular/common/http'
import {inject, Injectable} from '@angular/core'

import {CurrentUserInterface} from '@shared/types/user.interface'
import {AuthService} from '@auth/services/auth.service'
import {catchError, map, of, switchMap} from 'rxjs'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '@auth/store/actions/register.action'
import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'

@Injectable()
export class RegisterEffects {
  register$ = createEffect((actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => registerSuccessAction({currentUser})),
          catchError((res: HttpErrorResponse) =>
            of(registerFailureAction(res.error as {errors: AuthErrorResponseInterface})),
          ),
        )
      }),
    )
  })
}
