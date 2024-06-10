import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {inject, Injectable} from '@angular/core'

import {PersistenceService} from '@shared/services/persistence.service'
import {CurrentUserInterface} from '@shared/interfaces/user.interface'
import {AuthService} from '@auth/services/auth.service'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '@auth/store/actions/get-current-user.action'

@Injectable()
export class GetCurrentUserEffect {
  persistenceService = inject(PersistenceService)
  authService = inject(AuthService)
  actions$ = inject(Actions)

  getCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        if (!this.persistenceService.getToken<string>('accessToken')) {
          return of(getCurrentUserFailureAction())
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => getCurrentUserSuccessAction({currentUser})),
          catchError(() => of(getCurrentUserFailureAction())),
        )
      }),
    )
  })
}
