import {Injectable} from '@angular/core'
import {BaseService} from '@shared/services/base.service'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  deleteArticle(slug: string): Observable<{}> {
    return this.http.delete<{}>(`${this.baseURL}article/${slug}`)
  }
}
