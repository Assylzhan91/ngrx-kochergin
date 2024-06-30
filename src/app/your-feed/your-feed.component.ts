import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'

import {FeedComponent} from '@shared/components/feed/feed.component'
import {BannerComponent} from '@shared/components/banner/banner.component'
import {PopularTagsComponent} from '@shared/components/popular-tags/popular-tags.component'
import {FeedToggleComponent} from '@shared/components/feed-toggle/feed-toggle.component'

@Component({
  selector: 'ngrx-global-feed',
  standalone: true,
  imports: [
    PopularTagsComponent,
    FeedToggleComponent,
    BannerComponent,
    FeedComponent,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './your-feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YourFeedComponent {
  apiUrl = 'articles/feed'
}
