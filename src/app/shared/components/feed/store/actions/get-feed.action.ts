import {createAction, props} from '@ngrx/store'

import {GetFeedResponseInterface} from '@shared/components/feed/models/get-feed-response-interface'
import {ActionType} from '@shared/components/feed/store/action.types'

export const getFeedAction = createAction(
  ActionType.GET_FEED,
  props<{url: string; offset: number}>(),
)

export const getFeedSuccessAction = createAction(
  ActionType.GET_FEED_SUCCESS,
  props<{feed: GetFeedResponseInterface}>(),
)

export const getFeedFailureAction = createAction(ActionType.GET_FEED_FAILURE)
