import {createReducer, on} from '@ngrx/store'

import {FeedStateInterface} from '@shared/components/feed/models/feed-state.interface'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '@shared/components/feed/store/actions/get-feed.action'

export const feedFeatureKey = 'feed'

export const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

export const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state: FeedStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedSuccessAction, (state: FeedStateInterface, {feed}) => ({
    ...state,
    isLoading: false,
    data: feed,
  })),
  on(getFeedFailureAction, (state: FeedStateInterface) => ({
    ...state,
    isLoading: false,
  })),
)
