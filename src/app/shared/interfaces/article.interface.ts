import {ProfileInterface} from '@shared/interfaces/profile.interface'

export interface ArticleInterface extends ArticleEditInputInterface {
  author: ProfileInterface
  createdAt: string
  favorited: boolean
  favoritesCount: number
  slug: string
  updatedAt: string
}

export interface ArticleEditInputInterface<TagList = any> {
  body: string | null
  description: string | null
  tags: TagList
  title: string | null
}
