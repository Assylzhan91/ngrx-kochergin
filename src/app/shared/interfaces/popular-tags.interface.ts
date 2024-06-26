import {PopularTagType} from '@shared/types/popular-tag.type'

export interface PopularTagsInterface {
  tags: PopularTagType[]
}


export interface PopularTagsStateInterface {
  isLoading: boolean;
  error: string | null;
  popularTags: PopularTagType[] | null
}
