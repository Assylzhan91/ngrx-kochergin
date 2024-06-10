import {ProfileInterface} from '@shared/interfaces/profile.interface'
import {PopularTagType} from '@shared/types/popular-tag.type'

export interface ArticleInterface {
  author: ProfileInterface
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: PopularTagType[]
  title: string
  updatedAt: string
}
