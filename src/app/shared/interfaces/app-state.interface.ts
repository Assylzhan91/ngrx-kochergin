import {ArticleStateInterface} from '../../article/models/article-state.interface'
import {AuthStateInterface} from '@auth/types/auth-state.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  article: ArticleStateInterface
}
