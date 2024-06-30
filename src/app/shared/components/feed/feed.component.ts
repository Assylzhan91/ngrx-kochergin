import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  Signal,
  SimpleChanges,
} from '@angular/core'
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {CommonModule} from '@angular/common'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {GetFeedResponseInterface} from '@shared/components/feed/models/get-feed-response-interface'
import {ErrorMessageComponent} from '@shared/components/error-message/error-message.component'
import {PaginationComponent} from '@shared/components/pagination/pagination.component'
import {getFeedAction} from '@shared/components/feed/store/actions/get-feed.action'
import {TagListComponent} from '@shared/components/tag-list/tag-list.component'
import {LoadingComponent} from '@shared/components/loading/loading.component'
import {environment} from '@environments'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '@shared/components/feed/store/selectors'

@Component({
  selector: 'ngrx-feed',
  standalone: true,
  imports: [
    ErrorMessageComponent,
    PaginationComponent,
    TagListComponent,
    LoadingComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit, OnChanges {
  activatedRoute = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef)
  router = inject(Router)
  store = inject(Store)

  limit = environment.limit

  baseUrl!: string
  currentPage!: number

  @Input() articlesUrl!: string

  isLoadingSignal: Signal<boolean> = this.store.selectSignal(isLoadingSelector)
  errorSignal: Signal<string | null> = this.store.selectSignal(errorSelector)
  dataSignal: Observable<GetFeedResponseInterface | null> = this.store.pipe(select(feedSelector))

  ngOnInit(): void {
    this.initializeValues()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {articlesUrl} = changes
    const isApiUrlChanges =
      !articlesUrl.firstChange && articlesUrl.currentValue !== articlesUrl.previousValue
    if (isApiUrlChanges) {
      this.fetchFeed()
    }
  }

  initializeValues(): void {
    this.baseUrl = this.router.url.split('?')[0]
    this.activatedRoute.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params: Params) => {
        this.currentPage = +(params as {currentPage: string}).currentPage || 1
        this.fetchFeed()
        if (isNaN(this.currentPage)) {
          throw new Error('Error is maybe NAN or url incorrect')
        }
      })
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    this.store.dispatch(getFeedAction({url: this.articlesUrl, offset}))
  }
}
