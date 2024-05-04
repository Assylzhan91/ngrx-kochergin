import {createAction, props} from '@ngrx/store'

import {ActionType} from '@auth/store/action.types'

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{username: string; email: string; password: string}>(),
)
