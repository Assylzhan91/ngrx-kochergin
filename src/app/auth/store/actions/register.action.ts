import {createAction, props} from '@ngrx/store'

import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {RegisterRequestInterface} from '@auth/types/register-request.interface'
import {CurrentUserInterface} from '@shared/types/user.interface'
import {ActionType} from '@auth/store/action.types'

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{request: RegisterRequestInterface}>(),
)

export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>(),
)

export const registerFailureAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{errors: AuthErrorResponseInterface}>(),
)
