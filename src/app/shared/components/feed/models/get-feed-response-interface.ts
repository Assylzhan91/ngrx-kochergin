import {ArticleInterface} from '@shared/interfaces/article.interface'

export interface GetFeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
