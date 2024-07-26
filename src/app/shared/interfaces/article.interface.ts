import {ProfileInterface} from '@shared/interfaces/profile.interface'
import {PopularTagType} from '@shared/types/popular-tag.type'

export interface ArticleInterface extends ArticleEditInputInterface {
  author: ProfileInterface
  createdAt: string
  favorited: boolean
  favoritesCount: number
  slug: string
  updatedAt: string
}


export interface ArticleEditInputInterface {
  body: string;
  description: string;
  tagList: PopularTagType[]
  title: string;
}
