import { createFeatureSelector, createSelector } from '@ngrx/store';

import {PopularTagsStateInterface} from '@shared/interfaces/popular-tags.interface'
import { POPULAR_TAGS_FEATURE_KEY } from './popular-tags.reducer';

export const selectPopularTagsState = createFeatureSelector<PopularTagsStateInterface>(POPULAR_TAGS_FEATURE_KEY);

export const popularTagsSelect = createSelector(
  selectPopularTagsState,
  (state: PopularTagsStateInterface) => state.popularTags
);

export const isLoadingSelectI = createSelector(
  selectPopularTagsState,
  (state: PopularTagsStateInterface) => state.isLoading
);

export const popularTagsErrorSelect = createSelector(
  selectPopularTagsState,
  (state: PopularTagsStateInterface) => state.error
);
