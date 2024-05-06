import {createAction, props} from '@ngrx/store'

import {RegisterRequestInterface} from '@auth/types/register-request.interface'
import {ActionType} from '@auth/store/action.types'

export const registerAction = createAction(ActionType.REGISTER, props<RegisterRequestInterface>())
