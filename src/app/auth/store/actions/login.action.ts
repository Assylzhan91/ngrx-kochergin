import {createAction, props} from '@ngrx/store'

import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {LoginRequestInterface} from '@auth/types/login-request.interface'
import {CurrentUserInterface} from '@shared/types/user.interface'
import {ActionType} from '@auth/store/action.types'

export const loginAction = createAction(ActionType.LOGIN, props<{request: LoginRequestInterface}>())

export const loginSuccessAction = createAction(
  ActionType.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>(),
)

export const loginFailureAction = createAction(
  ActionType.LOGIN_FAILURE,
  props<{errors: AuthErrorResponseInterface}>(),
)
