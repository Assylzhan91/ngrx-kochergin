import {createAction, props} from '@ngrx/store'

import {CurrentUserInterface} from '@shared/types/user.interface'
import {ActionType} from '@auth/store/action.types'

export const getCurrentUserAction = createAction(ActionType.GET_CURRENT_USER)

export const getCurrentUserSuccessAction = createAction(
  ActionType.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>(),
)

export const getCurrentUserFailureAction = createAction(ActionType.GET_CURRENT_USER_FAILURE)
