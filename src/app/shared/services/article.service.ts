import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'

import {GetArticleResponseInterface} from '@shared/interfaces/get-article-response-interface'
import {ArticleInterface} from '@shared/interfaces/article.interface'
import {BaseService} from '@shared/services/base.service'

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  getArticleList(slug: string): Observable<ArticleInterface> {
    return this.http
      .get<GetArticleResponseInterface>(`${this.baseURL}/articles/${slug}`)
      .pipe(map(({article}) => article))
  }
}
