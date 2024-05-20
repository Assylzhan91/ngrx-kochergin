import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {inject, Injectable} from '@angular/core'

import {GetFeedResponseInterface} from '@shared/components/feed/models/get-feed-response-interface'
import {FeedService} from '@shared/components/feed/services/feed.service'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '@shared/components/feed/store/actions/get-feed.action'

@Injectable()
export class GetFeedEffect {
  feedService = inject(FeedService)
  actions$ = inject(Actions)

  getFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeedList(url).pipe(
          map((feed: GetFeedResponseInterface) => getFeedSuccessAction({feed})),
          catchError(() => of(getFeedFailureAction())),
        )
      }),
    )
  })
}
