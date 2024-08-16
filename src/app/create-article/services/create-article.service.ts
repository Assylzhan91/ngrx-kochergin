import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'

import {ArticleEditInputInterface, ArticleInterface} from '@shared/interfaces/article.interface'
import {SaveArticleResponse} from '@shared/interfaces/save-article-response'
import {BaseService} from '@shared/services/base.service'

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService extends BaseService {
  createArticle(articleForm: ArticleEditInputInterface): Observable<ArticleInterface> {
    return this.http
      .post<SaveArticleResponse>(this.baseURL + 'articles', {
        article: articleForm,
      })
      .pipe(map(({article}) => article))
  }
}
