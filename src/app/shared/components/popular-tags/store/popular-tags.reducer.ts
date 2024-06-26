import { createReducer, on } from '@ngrx/store';

import {
  getPopularTagsSuccess,
  getPopularTagsFailure,
  getPopularTags
} from './popular-tags.actions';
import {PopularTagsStateInterface} from '@shared/interfaces/popular-tags.interface'

export const POPULAR_TAGS_FEATURE_KEY = 'popularTags';

export const initialPopularTagsState: PopularTagsStateInterface = {
  isLoading: false,
  popularTags: null,
  error: null
}

export const popularTagsReducer = createReducer(
  initialPopularTagsState,
  on( getPopularTags,
    state => ({ ...state, isLoading: true, error: null, popularTags: null })
  ),
  on(getPopularTagsSuccess,
    (state, { popularTags }) => ({
      ...state,
      popularTags,
      isLoading: false
    })
  ),
  on(
    getPopularTagsFailure,
    (state, { error }) => ({ ...state, error, isLoading: false })
  )
)
