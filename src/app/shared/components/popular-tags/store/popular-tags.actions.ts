import { createAction, props } from '@ngrx/store';

import {ActionType} from '@shared/components/popular-tags/store/action.types'
import {PopularTagType} from '@shared/types/popular-tag.type'

export const getPopularTags = createAction(
  ActionType.GET_POPULAR_TAGS
);

export const getPopularTagsSuccess = createAction(
  ActionType.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
);

export const getPopularTagsFailure = createAction(
  ActionType.GET_POPULAR_TAGS_FAILURE,
  props<{ error: string }>()
);
