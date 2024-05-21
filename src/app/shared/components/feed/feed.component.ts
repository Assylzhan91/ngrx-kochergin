import {ChangeDetectionStrategy, Component, inject, Input, OnInit, Signal} from '@angular/core'
import {CommonModule, JsonPipe} from '@angular/common'
import {select, Store} from '@ngrx/store'

import {getFeedAction} from '@shared/components/feed/store/actions/get-feed.action'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '@shared/components/feed/store/selectors'
import {GetFeedResponseInterface} from '@shared/components/feed/models/get-feed-response-interface'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'ngrx-feed',
  standalone: true,
  imports: [CommonModule, JsonPipe, RouterLink],
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
