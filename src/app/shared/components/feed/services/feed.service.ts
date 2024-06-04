import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

import {GetFeedResponseInterface} from '@shared/components/feed/models/get-feed-response-interface'
import {BaseService} from '@shared/services/base.service'

@Injectable({
  providedIn: 'root',
})
export class FeedService extends BaseService {
  getFeedList(url: string, offset: number): Observable<GetFeedResponseInterface> {
    return this.http.get<GetFeedResponseInterface>(`${this.baseURL}${url}`, {
      params: {
        limit: 10,
        offset,
      },
    })
  }
}
