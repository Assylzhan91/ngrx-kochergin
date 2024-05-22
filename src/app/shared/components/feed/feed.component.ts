import {ChangeDetectionStrategy, Component, inject, Input, OnInit, Signal} from '@angular/core'
import {CommonModule, JsonPipe} from '@angular/common'
import {RouterLink} from '@angular/router'
import {Store} from '@ngrx/store'

import {GetFeedResponseInterface} from '@shared/components/feed/models/get-feed-response-interface'
import {ErrorMessageComponent} from '@shared/components/error-message/error-message.component'
import {getFeedAction} from '@shared/components/feed/store/actions/get-feed.action'
import {LoadingComponent} from '@shared/components/loading/loading.component'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '@shared/components/feed/store/selectors'

@Component({
  selector: 'ngrx-feed',
  standalone: true,
  imports: [CommonModule, JsonPipe, RouterLink, ErrorMessageComponent, LoadingComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  store = inject(Store)

  @Input() articlesUrl!: string

  isLoadingSignal: Signal<boolean> = this.store.selectSignal(isLoadingSelector)
  errorSignal: Signal<string | null> = this.store.selectSignal(errorSelector)
  dataSignal: Signal<GetFeedResponseInterface | null> = this.store.selectSignal(feedSelector)

  ngOnInit(): void {
    this.initializeValues()
  }
  initializeValues(): void {
    this.store.dispatch(getFeedAction({url: this.articlesUrl}))
  }
}
