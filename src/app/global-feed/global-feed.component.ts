import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'
import {Store} from '@ngrx/store'

import {getFeedAction} from '@shared/components/feed/store/actions/get-feed.action'
import {FeedComponent} from '@shared/components/feed/feed.component'

@Component({
  selector: 'ngrx-global-feed',
  standalone: true,
  imports: [CommonModule, FeedComponent, RouterOutlet],
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent implements OnInit {
  store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(getFeedAction({url: 'articles'}))
  }
}
